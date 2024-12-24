// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import PinCodeContainer from './components/PinCode/PinCodeContainer';
// import MainWindow from './components/MainWindow/MainWindow';
// import styles from './App.module.css';


// export default function App() {
//   return (
//     <Router>
//       <div className={styles.app}>
//         <Routes>
//           <Route path="/" element={
//             <MainWindow onReceive={() => window.location.pathname = '/receive'} onReturn={() => window.location.pathname = '/return'} />
//           } />
//           <Route path="/receive" element={<PinCodeContainer />} />
//           <Route path="/return" element={
//               <div className={styles.returnMessage}>
//                 <h2>Процесс возврата пока недоступен.</h2>
//               </div>
//             } />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }
import React, { useState } from 'react';
import PinCodeContainer from './components/PinCode/PinCodeContainer';
import MainWindow from './components/MainWindow/MainWindow';
import styles from './App.module.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('main'); 
  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return (
          <MainWindow
            onReceive={() => setCurrentPage('receive')}
            onReturn={() => setCurrentPage('return')}
          />
        )
      case 'receive':
        return <PinCodeContainer />;
      case 'return':
        return (
          <div className={styles.returnMessage}>
            <h2>Процесс возврата пока недоступен.</h2>
          </div>
        )
      default:
        return (
          <div>
            <h1>404 - Страница не найдена</h1>
            <button onClick={() => setCurrentPage('main')}>Вернуться на главную</button>
          </div>
        )
    }
  }
  return ( <div className={styles.app}>{renderPage()}</div> )
}
