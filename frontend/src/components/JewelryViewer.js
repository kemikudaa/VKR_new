import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';

const JewelryViewer = () => {
  const { jewelryId } = useParams();  // Получаем ID ювелирного изделия из URL
  const [jewelry, setJewelry] = useState(null);

  // Загрузка данных о ювелирном изделии
  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/jewelries/${jewelryId}`)
      .then(response => {
        setJewelry(response.data);  
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        alert('Не удалось загрузить ювелирное изделие. Попробуйте позже.');
      });
  }, [jewelryId]);

  // Компонент для загрузки 3D модели
  const Model = ({ fileUrl }) => {
    const { scene } = useGLTF(fileUrl);  // Загружаем модель

    return <primitive object={scene} />;
  };

  return (
    <div>
      {jewelry ? (
        <>
          {/* Отображаем данные о ювелирном изделии */}
          <h1>{jewelry.name || "Имя не указано"}</h1>
          <p>Цена: {jewelry.price || "Цена не указана"}</p>
          <p>Описание: {jewelry.description || "Описание не указано"}</p>
          <p>Коллекция: {jewelry.collection || "Коллекция не указана"}</p>
          <p>Автор: <a href={jewelry.author?.link || "#"}>{jewelry.author?.name || "Автор не указан"}</a></p>
          
          {/* Сценарий для рендеринга 3D модели */}
          <Canvas style={{ height: '500px' }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <OrbitControls />
            
            {/* Загружаем модель, если она существует */}
            {jewelry.three_d_file && <Model fileUrl={"http://127.0.0.1:8000/" + jewelry.three_d_file} />}
          </Canvas>
        </>
      ) : (
        <p>Загрузка...</p>  
      )}
    </div>
  );
};

export default JewelryViewer;
