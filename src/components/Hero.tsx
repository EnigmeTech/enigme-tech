import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import heroBg from "/hero-contact.png";

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        width: "100vw",
        overflow: "hidden",
        borderRadius: 0,
        minHeight: { xs: 300, md: 620 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        // 🔹 Fundo com bordas escuras e centro iluminado
        backgroundImage: `
          radial-gradient(
            circle at center,
            rgba(30, 70, 180, 0.9) 0%,      /* azul mais claro no centro */
            rgba(15, 40, 110, 0.94) 40%,
            rgba(8, 20, 60, 0.98) 80%       /* bordas mais escuras */
          ),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: 2,
      }}
    >
      <Stack spacing={1} sx={{ maxWidth: 960, mx: "auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            color: "rgba(230, 240, 255, 0.9)", // azul claro suave
            textShadow: "0 3px 12px rgba(0,0,0,0.45)",
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "4rem", lg: "5rem" },
          }}
        >
          Contato
        </Typography>
      </Stack>
    </Box>
  );
};

export default Hero;
