import styles from './PinCodeDisplay.module.css';

export default function PinCodeDisplay({ pin, hasError, isBlocked, isCorrect }) {
  const pinWithPlaceholders = Array(6).fill('_');
  for (let i = 0; i < pin.length; i++) pinWithPlaceholders[i] = pin[i];

  let pinCodeClass = styles.pinCode;
  if (hasError) pinCodeClass += ` ${styles.error}`;
  if (isCorrect) pinCodeClass += ` ${styles.correct}`;
  if (isBlocked) pinCodeClass += ` ${styles.blocked}`;

  return (
    <input
      className={pinCodeClass}
      type="text"
      value={pinWithPlaceholders.join(' ')}
      readOnly
      placeholder="____ __"
    />
  );
}

