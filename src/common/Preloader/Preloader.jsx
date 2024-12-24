import CircularProgress from '@mui/material/CircularProgress';
import styles from './Preloader.module.css';

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <CircularProgress />
    </div>
  )
}