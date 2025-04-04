// EarTracker.js
import React, { useRef, useEffect, useState } from 'react';
import * as mediapipe from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import Earring from './Earrings';  

function EarTracker() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [earPositions, setEarPositions] = useState({ left: null, right: null });
  let mediaPipeCamera = null;

  useEffect(() => {
    // Инициализация MediaPipe FaceMesh
    const faceMesh = new mediapipe.FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults(onResults);

    // Запрашиваем доступ к камере
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: 'user',
        },
      })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          mediaPipeCamera = new cam.Camera(videoRef.current, {
            onFrame: async () => {
              await faceMesh.send({ image: videoRef.current });
            },
            width: 640,
            height: 480,
          });
          mediaPipeCamera.start();
        }
      })
      .catch((err) => {
        console.error('Ошибка доступа к камере:', err);
        alert('Пожалуйста, разрешите доступ к камере');
      });
    }

    return () => {
      if (mediaPipeCamera) mediaPipeCamera.stop();
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const onResults = (results) => {
    const videoWidth = videoRef.current.videoWidth;
    const videoHeight = videoRef.current.videoHeight;

    if (results.multiFaceLandmarks) {
      const landmarks = results.multiFaceLandmarks[0];

      // Ключевые точки для ушей
      const leftEarPoints = [234, 454, 323];  // Левое ухо
      const rightEarPoints = [127, 234, 93];  // Правое ухо

      // Вычисляем центр уха как среднее значение точек
      const getEarCenter = (points) => {
        const center = points.reduce(
          (acc, index) => {
            return {
              x: acc.x + landmarks[index].x,
              y: acc.y + landmarks[index].y,
            };
          },
          { x: 0, y: 0 }
        );

        return {
          x: (center.x / points.length) * videoWidth,
          y: (center.y / points.length) * videoHeight,
        };
      };

      const leftEarCenter = getEarCenter(leftEarPoints);
      const rightEarCenter = getEarCenter(rightEarPoints);

      // Обновляем позиции ушей
      setEarPositions({
        left: leftEarCenter,
        right: rightEarCenter,
      });
    }

    // Отрисовка на canvas для MediaPipe
    const canvasCtx = canvasRef.current.getContext('2d');
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, videoWidth, videoHeight);
    canvasCtx.drawImage(results.image, 0, 0, videoWidth, videoHeight);
    canvasCtx.restore();
  };

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: '640px',
          height: '480px',
          position: 'absolute',
          transform: 'scaleX(-1)', // Зеркальное отображение
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          width: '640px',
          height: '480px',
          position: 'absolute',
          transform: 'scaleX(-1)', // Зеркальное отображение
        }}
      />
      {earPositions.left && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            padding: '5px',
          }}
        >
          Уши найдены
        </div>
      )}
      {earPositions.left && earPositions.right && (
        <Earring earPositions={earPositions} />
      )}
    </div>
  );
}

export default EarTracker;
