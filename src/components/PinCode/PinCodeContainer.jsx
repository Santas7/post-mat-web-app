import { useState } from 'react';
import PinCodeDisplay from './PinCodeDisplay';
import Keyboard from '../Keyboard/Keyboard';
import Preloader from '../../common/Preloader/Preloader';
import ErrorModal from './ErrorModal/ErrorModal'; 
import ErrorScreen from './ErrorScreen/ErrorScreen'; 
import styles from './PinCodeContainer.module.css';

const correctPins = ['123456', '234567', '345678', '456789'];

export default function PinCodeContainer({ onNavigate }) {
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const [blocked, setBlocked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorScreen, setShowErrorScreen] = useState(false);

  const handleClear = () => setPin('');

  const handleDigitClick = (digit) => {
    if (blocked || pin.length >= 6) return;
    setPin((prev) => prev + digit);
  };

  const handleSubmit = () => {
    if (blocked) return;
    setIsLoading(true);
    setTimeout(() => {
      if (correctPins.includes(pin)) {
        setMessage('Получите ваш заказ');
        setTimeout(() => {
          onNavigate('receiveParcel'); 
        }, 500); 
      } else {
        setMessage('Неверный Pin');
        setShowModal(true); 
        setAttempts((prev) => prev + 1);
        setPin('');

        if (attempts + 1 >= 3) {
          setShowModal(false);
          setBlocked(true);
          setShowErrorScreen(true); 
          setTimeout(() => {
            setBlocked(false);
            setAttempts(0);
            setMessage('');
            setShowErrorScreen(false); 
            setShowModal(false);
          }, 30000);
        }
      }
      setIsLoading(false);
    }, 1000);
  };

  if (showErrorScreen) {
    return <ErrorScreen message="3 неверных попытки ввода pin, экран заблокирован на 30 секунд" />;
  }

  return (
    <div className={styles.container}>
      <PinCodeDisplay pin={pin} />
      <Keyboard onDigitClick={handleDigitClick} onClear={handleClear} onSubmit={handleSubmit} />
      {isLoading && <Preloader />}
      {showModal && (
        <ErrorModal
          message={message}
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}
