import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import WebIcon from "@mui/icons-material/Web";

const SERVICES = [
  {
    title: "Criação de Aplicativos e Softwares Sob Medida",
    desc: "Desenvolvemos soluções personalizadas para atender exatamente às necessidades do seu negócio, com foco em eficiência e usabilidade.",
    Icon: DevicesIcon,
  },
  {
    title: "Automação de Processos",
    desc: "Eliminamos tarefas repetitivas e otimizamos fluxos de trabalho com soluções inteligentes e seguras, integrando sistemas e dados.",
    Icon: SettingsSuggestIcon,
  },
  {
    title: "Landing Pages Otimizadas",
    desc: "Projetamos páginas modernas, rápidas e de alto desempenho para atrair, engajar e converter visitantes em clientes.",
    Icon: WebIcon,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100svw",
        py: { xs: 6, md: 8 },
        background: `
          linear-gradient(180deg, rgba(8,18,46,0.95) 0%, rgba(11,35,90,0.95) 100%)
        `,
        color: "white",
        overflow: "hidden",
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
        <Stack spacing={2} sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#9FDBFF",
              textShadow: "0 0 12px rgba(159,219,255,0.5)",
            }}
          >
            Nossos Principais Serviços
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255,255,255,0.7)"
            sx={{
              fontWeight: 600,
              color: "rgba(255,255,255,0.75)",
              mx: "auto",
              maxWidth: "100%",
              mt: 2,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Focamos em soluções que realmente transformam negócios, de landing
            pages a sistemas inteligentes que otimizam processos.
          </Typography>
        </Stack>

        <Grid container spacing={3} justifyContent="center">
          {SERVICES.map(({ title, desc, Icon }) => (
            <Grid item key={title} xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  textAlign: "left",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(6px)",
                  transition:
                    "transform .2s ease, box-shadow .2s ease, border-color .3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(110,198,255,0.6)",
                    boxShadow: "0 0 20px rgba(110,198,255,0.20)",
                  },
                }}
              >
                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(110,198,255,0.12)",
                      border: "1px solid rgba(110,198,255,0.3)",
                      color: "#9FDBFF",
                    }}
                  >
                    <Icon sx={{ fontSize: 30 }} />
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.85,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {desc}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
