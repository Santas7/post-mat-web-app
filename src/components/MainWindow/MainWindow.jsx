import React from 'react';
import Button from '@mui/material/Button';
import styles from './MainWindow.module.css';

export default function MainWindow({ onReceive, onReturn }) {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Выберите действие</h1>
        <Button 
            variant="contained" 
            color="gold" 
            onClick={onReceive} 
            className={styles.button}
        >
            Желаете получить посылку по коду?
        </Button>
        <Button 
            variant="contained" 
            color="primary" 
            onClick={onReturn} 
            className={styles.button}
        >
            Хотите вернуть посылку обратно?
        </Button>
        </div>
    )
}

