import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PinCodeContainer from './components/PinCode/PinCodeContainer';
import MainWindow from './components/MainWindow/MainWindow';
import styles from './App.module.css';


export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={
            <MainWindow onReceive={() => window.location.pathname = '/receive'} onReturn={() => window.location.pathname = '/return'} />
          } />
          <Route path="/receive" element={<PinCodeContainer />} />
          <Route path="/return" element={
              <div className={styles.returnMessage}>
                <h2>Процесс возврата пока недоступен.</h2>
              </div>
            } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}