import React, { useEffect } from 'react';
import { Button, CircularProgress, Typography, Box } from '@mui/material';
import styles from './ReceiveParcel.module.css';

export default function ReceiveParcel({ onNavigate }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <Box className={styles.container} sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Заберите вашу посылку
      </Typography>

      <CircularProgress size={60} sx={{ marginBottom: 2 }} />

      <Typography variant="body1" gutterBottom>
        Вы будете перенаправлены на экран ввода пин-кода через 10 секунд...
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => onNavigate('pinCode')}
        sx={{ marginTop: 2 }}
      >
        Перейти сейчас
      </Button>
    </Box>
  );
}
