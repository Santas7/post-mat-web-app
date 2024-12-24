import React from "react";
import { Typography, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function ErrorScreen({ message }) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        gap: 2,
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
      <Typography variant="h4" color="error">
        Ошибка
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {message}
      </Typography>
    </Container>
  );
}
