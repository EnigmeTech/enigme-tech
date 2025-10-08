import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Button,
} from "@mui/material";

import aboutHero from "../../public/about-hero.png";
import sociosPhoto from "../../public/socios.jpg";

const AboutHero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 280, md: 520 },
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        backgroundImage: `url(${aboutHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 6, md: 10 },
        mb: 4,

        left: "50%",
        transform: "translateX(-50%)",
        width: "100svw",

        [theme.breakpoints.down("sm")]: {
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          transform: "none",
        },
      })}
    ></Box>
  );
};

const AboutSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100svw",
        background: "#0B1020",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={sociosPhoto}
              alt="Sócios da Enigme"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
                boxShadow:
                  "0 12px 30px rgba(11, 16, 32, 0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                border: "1px solid rgba(11,16,32,0.06)",
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: "#FFFFFF" }}
              >
                Nossa História
              </Typography>

              <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
                A Enigme nasceu com o propósito de encarar cada projeto como um
                enigma a ser decifrado. Acreditamos que soluções robustas podem
                (e devem) ser simples de usar. Por isso unimos criatividade,
                design e engenharia para transformar desafios complexos em
                experiências intuitivas e confiáveis.
              </Typography>

              <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
                Nossa identidade visual traduz essa visão: formas firmes,
                perspectivas bem definidas e uma paleta de azuis que evocam
                estrutura, confiança e inovação — um convite a observar o mesmo
                desafio por ângulos diferentes até chegar à solução mais clara.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label="Inovação" sx={{ fontWeight: 700 }} />
                <Chip label="Clareza" sx={{ fontWeight: 700 }} />
                <Chip label="Simplicidade" sx={{ fontWeight: 700 }} />
                <Chip label="Confiabilidade" sx={{ fontWeight: 700 }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AboutPage: React.FC = () => {
  return (
    <Stack spacing={6}>
      <AboutHero />
      <AboutSection />
    </Stack>
  );
};

export default AboutPage;
