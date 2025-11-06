import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DevicesIcon from "@mui/icons-material/Devices";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";
import BugReportIcon from "@mui/icons-material/BugReport";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

type Service = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    title: "Discovery & UX",
    desc: "Entrevistas, jornada, protótipos e validação rápida.",
    Icon: LightbulbIcon,
  },
  {
    title: "Desenvolvimento Web/App",
    desc: "Front-end React/TS, mobile quando necessário.",
    Icon: DevicesIcon,
  },
  {
    title: "Integrações & APIs",
    desc: "FastAPI/Flask, autenticação e gateways.",
    Icon: ApiIcon,
  },
  {
    title: "Cloud & DevOps",
    desc: "Deploy, monitoração e performance.",
    Icon: CloudIcon,
  },
  {
    title: "Qualidade & Testes",
    desc: "Automação, testes de regressão e QA contínuo.",
    Icon: BugReportIcon,
  },
  {
    title: "Suporte & Evolução",
    desc: "Roadmap, melhorias e novas features.",
    Icon: AutoFixHighIcon,
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
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Stack spacing={2} sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
            Serviços
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: 800 }}
          >
            Do entendimento do problema à entrega em produção — cuidamos de cada
            etapa para que suas ideias virem resultados.
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {SERVICES.map(({ title, desc, Icon }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition:
                    "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 2,
                    borderColor: "primary.main",
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "#0B4CFE",
                      color: "common.white",
                      flexShrink: 0,
                    }}
                  >
                    <Icon />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {desc}
                    </Typography>
                  </Stack>
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
