import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";

type TechItem = { label: string; Icon: React.ElementType };

const ITEMS: TechItem[] = [
  { label: "Desenvolvimento de Software & Apps", Icon: CodeIcon },
  { label: "Embedded Software", Icon: MemoryIcon },
  { label: "Inteligência Artificial", Icon: PsychologyIcon },
  { label: "Automação Industrial", Icon: PrecisionManufacturingIcon },
  { label: "Visão Computacional", Icon: VisibilityIcon },
  { label: "Labs, Testes & Qualidade", Icon: ScienceIcon },
];

const TechnologiesSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg" disableGutters>
        <Stack spacing={2} sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Somos especialistas em inovação
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            style={{ fontWeight: 800 }}
          >
            Tecnologias para o mercado local e global, transformando desafios em
            resultados reais. Confira algumas das nossas expertises.
          </Typography>
        </Stack>

        <Grid container spacing={2.5} justifyContent="center">
          {ITEMS.map(({ label, Icon }) => (
            <Grid item key={label} xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  // card gradiente azul (identidade)
                  background: "#0B4CFE",
                  color: "common.white",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow:
                    "0 10px 24px rgba(17, 51, 119, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                  transition: "transform .2s ease, box-shadow .2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      "0 16px 32px rgba(17, 51, 119, 0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ fontSize: 28, color: "#7CFFCB" }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologiesSection;
