import React from "react";
import { Box, Stack, Typography, Chip } from "@mui/material";
import heroBg from "../assets/hero-home.png";
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
        minHeight: { xs: 300, md: 480 },
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
        mb: 2,
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
            }}
          >
            Transformamos enigmas em soluções
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 800, lineHeight: 1.1, color: "#7CFFCB", mb: 6 }}
          >
            Conheça a Enigme
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 4 },
            }}
            onClick={() => navigate("/contato")}
          >
            <Chip
              label="Saiba mais"
              clickable
              color="primary"
              sx={{
                color: "common.white",
                fontWeight: 700,
                px: 2.5,
                py: 1,
                fontSize: "1.2rem",
                borderRadius: "999px",
                width: "fit-content",
                height: "60px",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroHome;
