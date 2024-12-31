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
  const [hasError, setHasError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClear = () => setPin('');

  const handleDigitClick = (digit) => {
    if (blocked || pin.length >= 6) return;
    setHasError(false); // Сбрасываем ошибку при вводе нового символа
    setPin((prev) => prev + digit);
  };

  const handleSubmit = () => {
    if (blocked) return;
    setIsLoading(true);
    setTimeout(() => {
      if (correctPins.includes(pin)) {
        setIsCorrect(true); // Устанавливаем состояние правильного ввода
        setMessage('Получите ваш заказ');
        setTimeout(() => {
          onNavigate('receiveParcel');
        }, 500);
      } else {
        setHasError(true); // Устанавливаем состояние ошибки
        setMessage('Неверный Pin');
        setShowModal(true); // Показываем модальное окно
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

  const handleCloseModal = () => {
    setShowModal(false);
    setHasError(false); // Сбрасываем подсветку ошибки при закрытии модального окна
  };

  if (showErrorScreen) {
    return <ErrorScreen message="3 неверных попытки ввода pin, экран заблокирован на 30 секунд" />;
  }

  return (
    <div className={styles.container}>
      <PinCodeDisplay 
        pin={pin} 
        hasError={hasError} 
        isBlocked={blocked} 
        isCorrect={isCorrect} 
      />
      <Keyboard onDigitClick={handleDigitClick} onClear={handleClear} onSubmit={handleSubmit} />
      {isLoading && <Preloader />}
      {showModal && (
        <ErrorModal
          message={message}
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

