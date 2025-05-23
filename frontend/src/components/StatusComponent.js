import React from 'react';
import './StatusComponent.css';

const StatusComponent = ({ applicationProgress }) => {
  // Ограничиваем прогресс от 0 до 100
  const progress = Math.min(Math.max(applicationProgress || 0, 0), 100);
  // Массив шагов
  const steps = [
    'ЗАПОЛНИТЕ ДАННЫЕ',
    'ЗАГРУЗИТЕ ПОРТФОЛИО',
    'ВЫБРАНЫ КАТЕГОРИИ',
    'ЗАГРУЗИТЕ ИЗОБРАЖЕНИЯ',
  ];
  // Вычисляем количество полностью заполненных шагов
  const completedSteps = Math.floor((progress / 100) * steps.length);

  return (
    <div className="status-container">
      <h2 className="status-title">STATUS</h2>
      <div className="steps-list">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className={`diamond ${index < completedSteps || (index === completedSteps && progress > (index * 25)) ? 'filled' : ''}`}></div>
            <span className="step-text">{step}</span>
          </div>
        ))}
      </div>
      <div className="progress-section">
        <span className="loading-text">LOADING...</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatusComponent;