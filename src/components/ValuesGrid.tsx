import { Box, Grid, Paper, Typography } from "@mui/material";
import { Lightbulb, Build, Search, Extension } from "@mui/icons-material";
import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Lightbulb sx={{ fontSize: 32, color: "#0B4CFE" }} />,
    title: "Inovação",
    desc: "Porque acreditamos que o futuro nasce da curiosidade.",
  },
  {
    icon: <Build sx={{ fontSize: 32, color: "#0B4CFE" }} />,
    title: "Eficiência",
    desc: "Porque boas ideias precisam funcionar bem.",
  },
  {
    icon: <Search sx={{ fontSize: 32, color: "#0B4CFE" }} />,
    title: "Transparência",
    desc: "Porque confiança é o que sustenta qualquer parceria.",
  },
  {
    icon: <Extension sx={{ fontSize: 32, color: "#0B4CFE" }} />,
    title: "Experiência sob medida",
    desc: "Porque cada desafio é único, e cada usuário também.",
  },
];

export const ValuesGrid = () => {
  return (
    <Box sx={{ mt: 8, m: { sm: 2, xs: 2 } }}>
      <Typography
        variant="h5"
        sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}
      >
        Guiados por nossos valores
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 4, color: "text.secondary", textAlign: "center" }}
      >
        Criamos soluções sob medida que refletem a essência de cada cliente e
        traduzem nossos valores em resultados reais.
      </Typography>
      <Grid container spacing={3}>
        {values.map((v, i) => (
          <Grid item xs={12} sm={6} md={3} key={v.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {v.icon}
                <Typography sx={{ fontWeight: 600, mt: 1 }}>
                  {v.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {v.desc}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
