import React from "react";
import { Box, Stack, Typography, Chip } from "@mui/material";
import heroBg from "/hero-home-enigme.jpg";
import { useNavigate } from "react-router-dom";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100svw",
        overflow: "hidden",
        minHeight: { xs: 400, md: 640 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box>
        <Stack spacing={2} sx={{ mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              color: "common.white",
              mb: 6,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            }}
          >
            Transformamos enigmas em soluções
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#9FDBFF",
              mb: 6,
              fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" },
            }}
          >
            Conheça a Enigme
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 4 },
            }}
            onClick={() => navigate("/sobre")}
          >
            <Chip
              label="Saiba mais"
              clickable
              sx={{
                color: "common.white",
                fontWeight: 700,
                px: { xs: 2, sm: 2.5 },
                py: { xs: 0.5, sm: 1 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                borderRadius: "999px",
                width: "fit-content",
                height: { xs: "40px", sm: "50px", md: "60px" },
                border: "2px solid rgba(255,255,255,0.9)", // 🔹 borda branca
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(4px)", // 🔹 leve efeito vidro
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.18)",
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* Divisor em V */}
      <Box
        component="svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "120px",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id="enigmeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(8,18,46,0.95)" />
            <stop offset="100%" stopColor="rgba(15,35,75,0.95)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#enigmeGradient)"
          d="M0,0 L720,150 L1440,0 L1440,150 L0,150 Z"
        />
      </Box>
    </Box>
  );
};

export default HeroHome;
