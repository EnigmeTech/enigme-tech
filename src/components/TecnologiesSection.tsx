import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";

type TechItem = {
  label: string;
  Icon: React.ElementType;
  description: string;
};

const ITEMS: TechItem[] = [
  {
    label: "Desenvolvimento de Software & Apps",
    Icon: CodeIcon,
    description:
      "Soluções digitais sob medida — sistemas web, aplicativos mobile e plataformas integradas.",
  },
  {
    label: "Sistemas Embarcados",
    Icon: MemoryIcon,
    description:
      "Firmware e integração com hardware para dispositivos inteligentes e IoT industrial.",
  },
  {
    label: "Inteligência Artificial",
    Icon: PsychologyIcon,
    description:
      "Modelos de machine learning e automação de decisões aplicados a negócios e indústria.",
  },
  {
    label: "Automação Industrial",
    Icon: PrecisionManufacturingIcon,
    description:
      "Projetos de controle e supervisão com integração entre software, sensores e processos.",
  },
  {
    label: "Visão Computacional",
    Icon: VisibilityIcon,
    description:
      "Análise de imagens e vídeos em tempo real para inspeção, rastreamento e reconhecimento.",
  },
  {
    label: "Labs, Testes & Qualidade",
    Icon: ScienceIcon,
    description:
      "Ambiente de testes, validação e prototipagem para garantir desempenho e confiabilidade.",
  },
];

const TechnologiesSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        py: { xs: 8, md: 10 },
        overflow: "hidden",
        background: `
          linear-gradient(180deg, rgba(8,18,46,0.95) 0%, rgba(11,25,64,0.95) 50%, rgba(15,35,75,0.95) 100%)
        `,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow:
          "inset 0 0 100px rgba(100, 160, 255, 0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-25%",
          width: "150%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
          transform: "skewY(-10deg)",
          opacity: 0.2,
        },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: 3, md: 6 },
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* --- Título e descrição --- */}
        <Stack spacing={0} sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Somos especialistas em inovação
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "100%",
              mx: "auto",
              mt: 2,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Unimos engenharia, software e inteligência para transformar desafios
            em soluções reais. Abaixo, apresentamos as principais áreas da
            tecnologia em que atuamos.
          </Typography>
        </Stack>

        {/* --- Cards de Áreas --- */}
        <Grid container spacing={2.5} justifyContent="center">
          {ITEMS.map(({ label, Icon, description }) => (
            <Grid item key={label} xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={0}
                tabIndex={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  minHeight: { xs: 80, sm: 100, md: 120 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 1.2,
                  color: "common.white",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(6px)",
                  cursor: "pointer",
                  boxShadow:
                    "0 8px 18px rgba(17, 51, 119, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                  transition:
                    "transform .25s ease, box-shadow .25s ease, background-color .25s ease",
                  "&:hover, &:focus-within": {
                    background:
                      "linear-gradient(180deg, rgba(124,255,203,0.1), rgba(11,76,254,0.1))",
                    boxShadow:
                      "0 12px 24px rgba(17, 51, 119, 0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                    transform: "translateY(-4px)",
                  },
                  "&:hover .desc, &:focus-within .desc": {
                    maxHeight: 180,
                    opacity: 1,
                  },
                }}
              >
                {/* Ícone + Label */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(255,255,255,0.25)",
                      background: "rgba(255,255,255,0.05)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ fontSize: 26, color: "#3EA9FF" }} />
                  </Box>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      lineHeight: 1.2,
                      color: "white",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>

                {/* Descrição expansível */}
                <Box
                  className="desc"
                  sx={{
                    mt: 0.5,
                    overflow: "hidden",
                    maxHeight: 0,
                    opacity: 0,
                    transition: "max-height 0.4s ease, opacity 0.4s ease",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.85,
                      lineHeight: 1.4,
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologiesSection;
