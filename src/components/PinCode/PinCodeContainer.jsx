import { useState } from 'react';
import PinCodeDisplay from './PinCodeDisplay';
import Keyboard from '../Keyboard/Keyboard';
import Preloader from '../../common/Preloader/Preloader';
import styles from './PinCodeContainer.module.css';

const correctPins = ['123456', '234567', '345678', '456789'];

export default function PinCodeContainer() {
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState('')
  const [blocked, setBlocked] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleClear = () => setPin('');

  const handleDigitClick = (digit) => {
    if (blocked || pin.length >= 6) return
    setPin((prev) => prev + digit)
  };

  const handleSubmit = () => {
    if (blocked) return;
    setIsLoading(true);
    setTimeout(() => {
      if (correctPins.includes(pin)) {
        setMessage('Получите ваш заказ')
      } else {
        setMessage('Неверный Pin')
        setAttempts((prev) => prev + 1);
        setPin('')

        if (attempts + 1 >= 3) {
          setBlocked(true)
          setMessage('3 неверных попытки ввода pin, экран заблокирован на 3 минуты');
          setTimeout(() => {
            setBlocked(false)
            setAttempts(0)
            setMessage('')
          }, 180000) 
        }
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <PinCodeDisplay pin={pin} />
      <Keyboard onDigitClick={handleDigitClick} onClear={handleClear} onSubmit={handleSubmit} />
      {isLoading && <Preloader />}
      {message && <div className={styles.message}>{message}</div>}
    </div>
  )
}