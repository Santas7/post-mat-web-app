import styles from './PinCodeDisplay.module.css';

export default function PinCodeDisplay({ pin }) {
  return <input className={styles.pinCode} type="text" value={pin} readOnly />
}

