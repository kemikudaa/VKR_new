import React, { useRef, useEffect, useState } from 'react';

const RealNeckDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [isActive, setIsActive] = useState(false);
  const [neckPoints, setNeckPoints] = useState([]);
  const [error, setError] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [poseDetector, setPoseDetector] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Проверка поддержки браузера
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError('Браузер не поддерживает доступ к камере');
    }
  }, []);

  // Загрузка MediaPipe Pose
  const loadMediaPipeScripts = () => {
    return new Promise((resolve, reject) => {
      console.log('Загрузка MediaPipe Pose...');
      
      if (window.Pose) {
        console.log('Pose уже загружен');
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js';
      script.onload = () => {
        console.log('Pose скрипт загружен');
        
        const cameraScript = document.createElement('script');
        cameraScript.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js';
        cameraScript.onload = () => {
          console.log('Camera utils загружен');
          resolve();
        };
        cameraScript.onerror = () => reject(new Error('Не удалось загрузить camera_utils'));
        document.head.appendChild(cameraScript);
      };
      script.onerror = () => reject(new Error('Не удалось загрузить Pose'));
      document.head.appendChild(script);
    });
  };

  // Инициализация Pose
  const initializePose = async () => {
    try {
      console.log('Инициализация Pose...');
      
      const poseInstance = new window.Pose({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
      });

      poseInstance.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        smoothSegmentation: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });

      poseInstance.onResults(onPoseResults);
      setPoseDetector(poseInstance);
      
      console.log('Pose инициализован успешно');
      return poseInstance;
    } catch (error) {
      console.error('Ошибка инициализации Pose:', error);
      throw error;
    }
  };

  // Обработка результатов детекции позы
  const onPoseResults = (results) => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const video = videoRef.current;

    // Устанавливаем размеры canvas равными размерам экрана
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Очистка
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Отрисовка видео на весь экран с правильными пропорциями
    ctx.save();
    ctx.scale(-1, 1); // зеркальное отображение
    
    // Вычисляем размеры для полноэкранного отображения с сохранением пропорций
    const videoAspect = video.videoWidth / video.videoHeight;
    const canvasAspect = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    // Изменяем логику: показываем все видео, а не обрезаем
    if (videoAspect > canvasAspect) {
      // Видео шире экрана - масштабируем по ширине и добавляем черные полосы сверху/снизу
      drawWidth = canvas.width;
      drawHeight = drawWidth / videoAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Видео выше экрана - масштабируем по высоте и добавляем черные полосы по бокам
      drawHeight = canvas.height;
      drawWidth = drawHeight * videoAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }
    
    // Добавляем черный фон для областей без видео
    ctx.fillStyle = '#000000';
    ctx.fillRect(-canvas.width, 0, canvas.width, canvas.height);
    
    // Рисуем видео с правильными пропорциями
    ctx.drawImage(video, -drawWidth - offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();

    if (results.poseLandmarks) {
      // Извлекаем точки шеи из pose landmarks
      const neckLandmarks = extractNeckFromPose(results.poseLandmarks);
      setNeckPoints(neckLandmarks);
      
      // Рисуем точки шеи с учетом правильного масштабирования
      drawNeckPointsFullscreen(ctx, neckLandmarks, canvas.width, canvas.height, drawWidth, drawHeight, offsetX, offsetY);
    } else {
      setNeckPoints([]);
    }
  };

  // Извлечение точек шеи из pose landmarks
  const extractNeckFromPose = (landmarks) => {
    const neckIndices = {
      leftShoulder: 11,
      rightShoulder: 12,
      leftEar: 7,
      rightEar: 8,
      nose: 0,
    };

    const neckPoints = [];
    
    const leftShoulder = landmarks[neckIndices.leftShoulder];
    const rightShoulder = landmarks[neckIndices.rightShoulder];
    const nose = landmarks[neckIndices.nose];
    const leftEar = landmarks[neckIndices.leftEar];
    const rightEar = landmarks[neckIndices.rightEar];

    if (leftShoulder && rightShoulder && nose) {
      // Добавляем основные точки
      neckPoints.push({
        x: leftShoulder.x,
        y: leftShoulder.y,
        z: leftShoulder.z || 0,
        type: 'leftShoulder',
        visibility: leftShoulder.visibility
      });

      neckPoints.push({
        x: rightShoulder.x,
        y: rightShoulder.y,
        z: rightShoulder.z || 0,
        type: 'rightShoulder',
        visibility: rightShoulder.visibility
      });

      neckPoints.push({
        x: nose.x,
        y: nose.y,
        z: nose.z || 0,
        type: 'nose',
        visibility: nose.visibility
      });

      // Добавляем уши если видны
      if (leftEar && leftEar.visibility > 0.5) {
        neckPoints.push({
          x: leftEar.x,
          y: leftEar.y,
          z: leftEar.z || 0,
          type: 'leftEar',
          visibility: leftEar.visibility
        });
      }

      if (rightEar && rightEar.visibility > 0.5) {
        neckPoints.push({
          x: rightEar.x,
          y: rightEar.y,
          z: rightEar.z || 0,
          type: 'rightEar',
          visibility: rightEar.visibility
        });
      }

      // Создаем промежуточные точки между плечами
      const shoulderSteps = 5;
      for (let i = 1; i < shoulderSteps; i++) {
        const t = i / shoulderSteps;
        neckPoints.push({
          x: leftShoulder.x + (rightShoulder.x - leftShoulder.x) * t,
          y: leftShoulder.y + (rightShoulder.y - leftShoulder.y) * t,
          z: leftShoulder.z + (rightShoulder.z - leftShoulder.z) * t,
          type: 'neckBase',
          visibility: Math.min(leftShoulder.visibility, rightShoulder.visibility)
        });
      }

      // Создаем точки от центра плеч к носу
      const centerShoulderX = (leftShoulder.x + rightShoulder.x) / 2;
      const centerShoulderY = (leftShoulder.y + rightShoulder.y) / 2;
      const centerShoulderZ = (leftShoulder.z + rightShoulder.z) / 2;

      const neckSteps = 4;
      for (let i = 1; i < neckSteps; i++) {
        const t = i / neckSteps;
        neckPoints.push({
          x: centerShoulderX + (nose.x - centerShoulderX) * t,
          y: centerShoulderY + (nose.y - centerShoulderY) * t,
          z: centerShoulderZ + (nose.z - centerShoulderZ) * t,
          type: 'neckCenter',
          visibility: Math.min(nose.visibility, (leftShoulder.visibility + rightShoulder.visibility) / 2)
        });
      }
    }

    return neckPoints.filter(point => point.visibility > 0.3);
  };

  // Отрисовка точек шеи для полноэкранного режима
  const drawNeckPointsFullscreen = (ctx, points, canvasWidth, canvasHeight, videoWidth, videoHeight, offsetX, offsetY) => {
    if (points.length === 0) return;

    // Рисуем точки разными цветами в зависимости от типа
    points.forEach((point) => {
      const x = (1 - point.x) * videoWidth + offsetX;
      const y = point.y * videoHeight + offsetY;
      
      let color, size;
      switch (point.type) {
        case 'leftShoulder':
        case 'rightShoulder':
          color = '#FF0000';
          size = 12;
          break;
        case 'nose':
          color = '#00FF00';
          size = 10;
          break;
        case 'leftEar':
        case 'rightEar':
          color = '#0000FF';
          size = 8;
          break;
        case 'neckBase':
          color = '#FFFF00';
          size = 6;
          break;
        case 'neckCenter':
          color = '#FF00FF';
          size = 8;
          break;
        default:
          color = '#FFFFFF';
          size = 5;
      }
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Рисуем линии соединения
    drawNeckConnectionsFullscreen(ctx, points, videoWidth, videoHeight, offsetX, offsetY);
  };

  // Рисование соединений шеи для полноэкранного режима
  const drawNeckConnectionsFullscreen = (ctx, points, videoWidth, videoHeight, offsetX, offsetY) => {
    const shoulders = points.filter(p => p.type === 'leftShoulder' || p.type === 'rightShoulder');
    const neckCenter = points.filter(p => p.type === 'neckCenter');
    const nose = points.find(p => p.type === 'nose');

    // Линия между плечами
    if (shoulders.length === 2) {
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      const x1 = (1 - shoulders[0].x) * videoWidth + offsetX;
      const y1 = shoulders[0].y * videoHeight + offsetY;
      const x2 = (1 - shoulders[1].x) * videoWidth + offsetX;
      const y2 = shoulders[1].y * videoHeight + offsetY;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Центральная линия шеи
    if (neckCenter.length > 0 && nose) {
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.9)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      if (shoulders.length === 2) {
        const centerX = (1 - (shoulders[0].x + shoulders[1].x) / 2) * videoWidth + offsetX;
        const centerY = ((shoulders[0].y + shoulders[1].y) / 2) * videoHeight + offsetY;
        ctx.moveTo(centerX, centerY);
        
        neckCenter.forEach(point => {
          const x = (1 - point.x) * videoWidth + offsetX;
          const y = point.y * videoHeight + offsetY;
          ctx.lineTo(x, y);
        });
        
        const noseX = (1 - nose.x) * videoWidth + offsetX;
        const noseY = nose.y * videoHeight + offsetY;
        ctx.lineTo(noseX, noseY);
        ctx.stroke();
      }
    }
  };

  // Запуск камеры и детекции
  const startCamera = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Начинаем запуск камеры с Pose...');

      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        setMediaStream(null);
      }

      await loadMediaPipeScripts();
      const poseInstance = await initializePose();
      
      console.log('Запрос доступа к камере...');
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640, max: 1280 },
          height: { ideal: 480, max: 720 },
          facingMode: 'user',
          frameRate: { ideal: 30, max: 60 }
        }
      });

      console.log('Поток камеры получен');
      setMediaStream(stream);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        videoRef.current.onloadedmetadata = () => {
          console.log('Метаданные видео загружены');
          
          videoRef.current.play().then(() => {
            console.log('Воспроизведение началось');
            setIsActive(true);
            setIsLoading(false);
            
            if (poseInstance && window.Camera) {
              console.log('Запуск детекции позы...');
              
              const camera = new window.Camera(videoRef.current, {
                onFrame: async () => {
                  if (poseInstance && videoRef.current && !videoRef.current.paused) {
                    try {
                      await poseInstance.send({ image: videoRef.current });
                    } catch (err) {
                      console.warn('Ошибка отправки кадра:', err);
                    }
                  }
                },
                width: 640,
                height: 480
              });
              
              camera.start();
              console.log('Детекция позы запущена');
            } else {
              console.error('Не удалось запустить детекцию - отсутствуют зависимости');
            }
          }).catch(error => {
            console.error('Ошибка воспроизведения:', error);
            setError('Ошибка воспроизведения видео');
            setIsLoading(false);
          });
        };
      }
    } catch (error) {
      console.error('Ошибка запуска:', error);
      
      let errorMessage = '';
      if (error.name === 'NotAllowedError') {
        errorMessage = 'Доступ к камере запрещен. Разрешите доступ в настройках браузера.';
      } else if (error.name === 'NotFoundError') {
        errorMessage = 'Камера не найдена. Подключите камеру и обновите страницу.';
      } else if (error.name === 'NotReadableError' || error.message.includes('Device in use')) {
        errorMessage = 'Камера используется другим приложением. Закройте другие программы, использующие камеру.';
      } else {
        errorMessage = `Ошибка: ${error.message}`;
      }
      
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  // Остановка камеры
  const stopCamera = () => {
    console.log('Остановка камеры...');
    
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
        console.log('Трек остановлен:', track.kind);
      });
      setMediaStream(null);
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    
    setIsActive(false);
    setNeckPoints([]);
    setError(null);
  };

  // Очистка при размонтировании компонента
  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaStream]);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: '#000', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Полноэкранное видео */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <video
          ref={videoRef}
          style={{ display: 'none' }}
          playsInline
          muted
          autoPlay
        />

        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* UI поверх видео */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none', // Блокируем события для контейнера
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Заголовок */}
        <div style={{ 
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'auto'
        }}>
          <h1 style={{ 
            margin: 0, 
            color: '#00ff88', 
            fontSize: '24px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            textAlign: 'center'
          }}>
            Детекция шеи для цепочек
          </h1>
        </div>

        {/* Контролы */}
        <div style={{ 
          position: 'absolute',
          top: '20px',
          left: '20px',
          display: 'flex', 
          gap: '10px',
          pointerEvents: 'auto',
          zIndex: 20 // Повышаем z-index для кнопок
        }}>
          <button 
            onClick={startCamera}
            disabled={isActive || isLoading}
            style={{
              padding: '10px 16px',
              background: (isActive || isLoading) ? 'rgba(102,102,102,0.9)' : 'rgba(0,255,136,0.9)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: (isActive || isLoading) ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              pointerEvents: 'auto' // Принудительно включаем события
            }}
          >
            {isLoading ? 'Загрузка...' : isActive ? 'Активна' : 'Включить'}
          </button>
          
          <button 
            onClick={stopCamera}
            disabled={!isActive}
            style={{
              padding: '10px 16px',
              background: !isActive ? 'rgba(102,102,102,0.9)' : 'rgba(255,71,87,0.9)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: !isActive ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              pointerEvents: 'auto' // Принудительно включаем события
            }}
          >
            Остановить
          </button>
        </div>

        {/* Информация */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.7)',
          padding: '12px',
          borderRadius: '8px',
          minWidth: '200px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          pointerEvents: 'auto'
        }}>
          <div style={{ marginBottom: '6px', fontSize: '14px' }}>
            <strong>Статус:</strong> {
              isLoading ? '⏳ Загрузка...' : 
              isActive ? '🟢 Активна' : '🔴 Неактивна'
            }
          </div>
          <div style={{ fontSize: '14px' }}>
            <strong>Точки шеи:</strong> {neckPoints.length}
          </div>
          {error && (
            <div style={{ color: '#ff4757', fontWeight: 'bold', fontSize: '12px', marginTop: '6px' }}>
              ❌ {error}
            </div>
          )}
        </div>

        {/* Легенда */}
        {isActive && neckPoints.length > 0 && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '12px',
            backdropFilter: 'blur(10px)',
            pointerEvents: 'auto'
          }}>
            <div style={{ marginBottom: '6px', fontWeight: 'bold', textAlign: 'center' }}>Область шеи:</div>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div>🔴 Плечи</div>
              <div>🟢 Верх</div>
              <div>🔵 Боковые</div>
              <div>🟣 Центр</div>
            </div>
          </div>
        )}

        {/* Инструкции */}
        {!isActive && !isLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px',
            pointerEvents: 'none' // Убираем блокировку кликов
          }}>
            <div>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎯</div>
              <div style={{ fontSize: '24px', marginBottom: '15px' }}>Нажмите "Включить" для начала детекции</div>
              <div style={{ fontSize: '16px', opacity: 0.8, maxWidth: '400px' }}>
                Встаньте так, чтобы были видны плечи и голова целиком
              </div>
            </div>
          </div>
        )}

        {/* Загрузка */}
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px',
            pointerEvents: 'none' // Убираем блокировку кликов
          }}>
            <div>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>⏳</div>
              <div style={{ fontSize: '24px', marginBottom: '15px' }}>Загрузка MediaPipe Pose...</div>
              <div style={{ fontSize: '16px', opacity: 0.8 }}>
                Инициализация детектора позы
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealNeckDetection;