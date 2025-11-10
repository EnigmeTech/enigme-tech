import React from "react";
import { Box, Container, Grid, Stack, Typography, Chip } from "@mui/material";

import aboutHero from "/about-hero.png";
import sociosPhoto from "/socios.jpg";
import { ValuesGrid } from "../components/ValuesGrid";
import { FoundersSection } from "../components/FoundersSection";

const AboutHero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 280, md: 520 },
        height: {
          sm: "35vh",
          xs: "35vh",
          md: "75vh",
        },
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        backgroundImage: `url(${aboutHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 6, md: 10 },

        left: "50%",
        transform: "translateX(-50%)",
        width: "100svw",

        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
        [theme.breakpoints.down("xs")]: {
          width: "100%",
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
        background: "#121830",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, md: 3 }, pb: { sm: 0, xs: 0, md: 0 } }}
      >
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

              <Typography
                variant="body1"
                sx={{ color: "#FFFFFF", textAlign: "justify" }}
              >
                A Enigme nasceu com o propósito de encarar cada projeto como um
                enigma a ser decifrado. Desde o início, entendemos que a
                tecnologia só tem valor quando melhora a vida das pessoas. Por
                isso, nosso principal objetivo é aprimorar a experiência dos
                usuários, tornando o complexo simples e o técnico, acessível.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#FFFFFF", textAlign: "justify" }}
              >
                Mais do que desenvolver sistemas, fazemos parte de algo maior:
                um ecossistema que conecta inovação, design e engenharia para
                transformar desafios em oportunidades. Cada projeto é uma peça
                de um todo que une negócios, tecnologia e propósito, sempre com
                foco em entregar experiências digitais intuitivas e humanas.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#FFFFFF", textAlign: "justify" }}
              >
                Temos a visão de nos tornarmos referência no desenvolvimento de
                software, reconhecidos pela capacidade de unir criatividade,
                confiabilidade e impacto real. Continuamos evoluindo com o mesmo
                espírito que nos trouxe até aqui — o de transformar tecnologia
                em experiências que inspiram e geram valor duradouro.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AboutPage: React.FC = () => {
  return (
    <Stack spacing={0}>
      <AboutHero />
      <AboutSection />
      <ValuesGrid />
      <FoundersSection />
    </Stack>
  );
};

export default AboutPage;
