import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import styles from './Keyboard.module.css';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Keyboard({ onDigitClick, onClear, onSubmit }) {
  return (
    <div className={styles.keyboard}>
      {nums.map((digit) => (
        <Button
          key={digit}
          variant="outlined"
          onClick={() => onDigitClick(digit)}
          className={styles.button}
        >
          {digit}
        </Button>
      ))}
      <Button
        variant="outlined"
        onClick={() => onDigitClick(0)}
        className={styles.button}
      >
        0
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={onClear}
        className={styles.button}
        startIcon={<ClearIcon />}
      >

      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={onSubmit}
        className={styles.button}
        startIcon={<SendIcon />}
      >

      </Button>
    </div>
  );
}
