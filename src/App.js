import React, { useState } from 'react';
import PinCodeContainer from './components/PinCode/PinCodeContainer';
import styles from './App.module.css';
import ReceiveParcel from './components/PinCode/ReceiveParcel/ReceiveParcel';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PinCodeContainer onNavigate={setCurrentPage} />;
      case 'error':
        return (
          <div className={styles.errorScreen}>
            <h2>Экран ошибки</h2>
            <button onClick={() => setCurrentPage('home')}>Вернуться на главную</button>
          </div>
        );
      case 'return':
        return (
          <div className={styles.returnMessage}>
            <h2>Процесс возврата пока недоступен.</h2>
            <button onClick={() => setCurrentPage('home')}>Вернуться на главную</button>
          </div>
        );
      case 'receiveParcel':
        return <ReceiveParcel onNavigate={setCurrentPage} />; 
      default:
        return (
          <div className={styles.notFound}>
            <h2>Страница не найдена</h2>
            <button onClick={() => setCurrentPage('home')}>Вернуться на главную</button>
          </div>
        );
      }
  };

  return <div className={styles.app}>{renderPage()}</div>;
}
