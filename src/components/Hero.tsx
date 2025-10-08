// src/components/Hero.tsx
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import heroBg from "../assets/hero-contact.png";

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        // --- full-bleed mesmo dentro de Container:
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        width: "100vw",

        overflow: "hidden",
        borderRadius: 0,
        minHeight: { xs: 300, md: 420 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `
          linear-gradient(180deg, rgba(12,1,183,0.65) 0%, rgba(11,76,254,0.55) 100%),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: 2,
      }}
    >
      <Stack spacing={1} sx={{ maxWidth: 960, mx: "auto" }}>
        <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
          Contato
        </Typography>
      </Stack>
    </Box>
  );
};

export default Hero;
