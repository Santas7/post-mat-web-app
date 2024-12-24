import React, { useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import styles from './ReceiveParcel.module.css';
import ParcelGif from '../../../assets/images/parcel.gif'

export default function ReceiveParcel({ onNavigate }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('home');
    }, 10000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <Box className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Заберите вашу посылку
      </Typography>

      <img
        src={ParcelGif}
        alt="Идет загрузка..."
        className={styles.loaderGif}
      />

      <Typography variant="body1" gutterBottom>
        Вы будете перенаправлены на экран ввода пин-кода через 10 секунд...
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => onNavigate('home')}
        className={styles.button}
      >
        Перейти сейчас
      </Button>
    </Box>
  );
}
