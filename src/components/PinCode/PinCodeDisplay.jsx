import styles from './PinCodeDisplay.module.css';

export default function PinCodeDisplay({ pin }) {
  const pinWithPlaceholders = Array(6).fill('_');
  for (let i = 0; i < pin.length; i++) pinWithPlaceholders[i] = pin[i];

  return (
    <input
      className={styles.pinCode}
      type="text"
      value={pinWithPlaceholders.join(' ')} 
      readOnly
      placeholder="____ __" 
    />
  );
}
