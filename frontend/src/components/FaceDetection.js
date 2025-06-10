import React, { useRef, useEffect, useState } from 'react';

const SimpleNeckDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [isActive, setIsActive] = useState(false);
  const [neckPoints, setNeckPoints] = useState([]);
  const [error, setError] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [faceMesh, setFaceMesh] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Проверка поддержки браузера
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError('Браузер не поддерживает доступ к камере');
    }
  }, []);

  // Загрузка MediaPipe скриптов
  const loadMediaPipeScripts = () => {
    return new Promise((resolve, reject) => {
      console.log('Загрузка MediaPipe скриптов...');
      
      if (window.FaceMesh) {
        console.log('FaceMesh уже загружен');
        resolve();
        return;
      }

      // Загружаем только необходимые скрипты
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js';
      script.onload = () => {
        console.log('FaceMesh скрипт загружен');
        
        // Загружаем camera_utils
        const cameraScript = document.createElement('script');
        cameraScript.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js';
        cameraScript.onload = () => {
          console.log('Camera utils загружен');
          resolve();
        };
        cameraScript.onerror = () => reject(new Error('Не удалось загрузить camera_utils'));
        document.head.appendChild(cameraScript);
      };
      script.onerror = () => reject(new Error('Не удалось загрузить FaceMesh'));
      document.head.appendChild(script);
    });
  };

  // Инициализация FaceMesh
  const initializeFaceMesh = async () => {
    try {
      console.log('Инициализация FaceMesh...');
      
      const faceMeshInstance = new window.FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
      });

      faceMeshInstance.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });

      faceMeshInstance.onResults(onFaceResults);
      setFaceMesh(faceMeshInstance);
      
      console.log('FaceMesh инициализован успешно');
      return faceMeshInstance;
    } catch (error) {
      console.error('Ошибка инициализации FaceMesh:', error);
      throw error;
    }
  };

  // Обработка результатов детекции
  const onFaceResults = (results) => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const video = videoRef.current;

    // Очистка
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Отрисовка видео с зеркальным отображением
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();

    if (results.multiFaceLandmarks && results.multiFaceLandmarks[0]) {
      const landmarks = results.multiFaceLandmarks[0];
      
      // Извлекаем точки области шеи
      const neckLandmarks = extractNeckLandmarks(landmarks);
      setNeckPoints(neckLandmarks);
      
      // Рисуем точки
      drawNeckPoints(ctx, neckLandmarks);
    } else {
      setNeckPoints([]);
    }
  };

  // Извлечение точек шеи (упрощенная версия)
  const extractNeckLandmarks = (landmarks) => {
    // Используем точки подбородка и нижней части лица
    const chinIndices = [
      // Центральные точки подбородка
      18, 200, 199, 175, 18,
      // Боковые точки челюсти
      172, 136, 150, 149, 176, 148, 152, 377, 400, 378, 379, 365, 397, 288, 361, 323,
      // Дополнительные точки для контура
      58, 132, 93, 234, 454, 323, 361, 288
    ];

    const neckPoints = [];
    
    chinIndices.forEach(index => {
      if (landmarks[index]) {
        neckPoints.push({
          x: landmarks[index].x,
          y: landmarks[index].y,
          z: landmarks[index].z || 0,
          index: index
        });
      }
    });

    return neckPoints;
  };

  // Отрисовка точек шеи
  const drawNeckPoints = (ctx, points) => {
    if (points.length === 0) return;

    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;

    // Рисуем точки
    points.forEach((point, index) => {
      const x = (1 - point.x) * canvasWidth; // инвертируем X для зеркального отображения
      const y = point.y * canvasHeight;
      
      // Цвет зависит от индекса точки
      if (point.index === 18 || point.index === 175) {
        // Центральные точки подбородка - красные и крупные
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        // Остальные точки - оранжевые и поменьше
        ctx.fillStyle = '#FF8800';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });

    // Рисуем линию контура шеи
    if (points.length > 3) {
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      // Соединяем точки для создания контура
      const sortedPoints = points.sort((a, b) => a.x - b.x); // сортируем по X
      
      sortedPoints.forEach((point, index) => {
        const x = (1 - point.x) * canvasWidth;
        const y = point.y * canvasHeight;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();
    }
  };

  // Запуск камеры и детекции
  const startCamera = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Начинаем запуск камеры...');

      // 1. Загружаем MediaPipe скрипты
      await loadMediaPipeScripts();
      
      // 2. Инициализируем FaceMesh
      const faceMeshInstance = await initializeFaceMesh();
      
      // 3. Запускаем камеру
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
            
            // Настраиваем canvas
            if (canvasRef.current) {
              canvasRef.current.width = 640;
              canvasRef.current.height = 480;
              console.log('Canvas настроен');
            }
            
            // Запускаем детекцию
            if (faceMeshInstance && window.Camera) {
              console.log('Запуск детекции...');
              
              const camera = new window.Camera(videoRef.current, {
                onFrame: async () => {
                  if (faceMeshInstance && videoRef.current && !videoRef.current.paused) {
                    try {
                      await faceMeshInstance.send({ image: videoRef.current });
                    } catch (err) {
                      console.warn('Ошибка отправки кадра:', err);
                    }
                  }
                },
                width: 640,
                height: 480
              });
              
              camera.start();
              console.log('Детекция запущена');
            } else {
              console.error('Не удалось запустить детекцию - отсутствуют зависимости');
            }
          }).catch(error => {
            console.error('Ошибка воспроизведения:', error);
            setError('Ошибка воспроизведения видео');
            setIsLoading(false);
          });
        };

        videoRef.current.onerror = (error) => {
          console.error('Ошибка видео:', error);
          setError('Ошибка видео потока');
          setIsLoading(false);
        };
      }
    } catch (error) {
      console.error('Ошибка запуска:', error);
      setError(`Ошибка: ${error.message}`);
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

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: '#000', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Заголовок */}
      <h1 style={{ margin: '20px 0', color: '#00ff88' }}>
        Детекция шеи для цепочек
      </h1>

      {/* Контролы */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <button 
          onClick={startCamera}
          disabled={isActive || isLoading}
          style={{
            padding: '12px 24px',
            background: (isActive || isLoading) ? '#666' : '#00ff88',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: (isActive || isLoading) ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          {isLoading ? 'Загрузка...' : isActive ? 'Камера активна' : 'Включить камеру'}
        </button>
        
        <button 
          onClick={stopCamera}
          disabled={!isActive}
          style={{
            padding: '12px 24px',
            background: !isActive ? '#666' : '#ff4757',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: !isActive ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Остановить камеру
        </button>
      </div>

      {/* Информация о состоянии */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        minWidth: '300px',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '8px' }}>
          <strong>Точки шеи:</strong> {neckPoints.length}
        </div>
        {error && (
          <div style={{ color: '#ff4757', fontWeight: 'bold' }}>
            ❌ {error}
          </div>
        )}
      </div>

      {/* Видео контейнер */}
      <div style={{
        position: 'relative',
        width: '640px',
        height: '480px',
        border: '2px solid #00ff88',
        borderRadius: '10px',
        overflow: 'hidden',
        background: '#222'
      }}>
        {/* Скрытое видео */}
        <video
          ref={videoRef}
          style={{ display: 'none' }}
          playsInline
          muted
          autoPlay
        />

        {/* Canvas для отображения */}
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />

        {/* Оверлей с инструкциями */}
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
            fontSize: '18px'
          }}>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>📷</div>
              <div>Нажмите "Включить камеру" для начала</div>
              <div style={{ fontSize: '14px', marginTop: '10px', opacity: 0.7 }}>
                Поверните лицо к камере для детекции шеи
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
            fontSize: '18px'
          }}>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
              <div>Загрузка MediaPipe...</div>
              <div style={{ fontSize: '14px', marginTop: '10px', opacity: 0.7 }}>
                Первый запуск может занять некоторое время
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Легенда */}
      {isActive && neckPoints.length > 0 && (
        <div style={{
          marginTop: '20px',
          background: 'rgba(255,255,255,0.1)',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Легенда:</div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div>🔴 Центр подбородка</div>
            <div>🟠 Контур челюсти</div>
            <div>🟢 Линия шеи</div>
          </div>
        </div>
      )}

      {/* Инструкции */}
      <div style={{
        marginTop: '20px',
        maxWidth: '600px',
        textAlign: 'center',
        fontSize: '14px',
        opacity: 0.8,
        lineHeight: '1.6'
      }}>
        <p><strong>Инструкции:</strong></p>
        <p>1. Разрешите доступ к камере в браузере</p>
        <p>2. Поверните лицо прямо к камере</p>
        <p>3. Убедитесь, что освещение достаточное</p>
        <p>4. Красные и оранжевые точки показывают область для размещения цепочки</p>
      </div>
    </div>
  );
};
export default SimpleNeckDetection;