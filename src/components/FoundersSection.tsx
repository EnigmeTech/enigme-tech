import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Geanne Olimpio",
    role: "CEO | Desenvolvedora FullStack | Engenheira de Controle e Automação",
    focus:
      "Dupla diplomação em Engenharia de Controle e Automação (França e Brasil)",
    img: "/geanne.JPG",
  },
  {
    name: "Emanuel Nassib",
    role: "CEO",
    focus: "MBA em Liderança Executiva e Gestão Empresarial",
    img: "/emanuel.JPG",
  },
  {
    name: "Victória Olimpio",
    role: "Diretora Jurídica",
    focus: "Bacharel em Direito",
    img: "/victoria.JPG",
  },
];

export const FoundersSection = () => (
  <Box
    sx={{
      pt: { xs: 6, md: 10 },
      pb: 2,
      color: "#EAF2FF",
      textAlign: "center",
    }}
  >
    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
      Quem lidera nossa jornada
    </Typography>
    <Typography
      variant="body1"
      sx={{
        mb: 6,
        color: "#B9D5FD",
        maxWidth: 700,
        mx: "auto",
      }}
    >
      O time fundador que impulsiona nossa cultura de excelência e inovação.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {founders.map((f, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={f.name}
          sx={{
            mx: { xs: 3, sm: 3, md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: { xs: 3, sm: 3, md: 0 },
                borderRadius: 4,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "fit-content",
                minHeight: { xs: "38vh", sm: "38vh", md: "85vh" },
              }}
            >
              <Box
                component="img"
                src={f.img}
                alt={f.name}
                sx={{
                  width: "100%",
                  height: { sm: 260, xs: 260, md: 500 },
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: 3,
                  mb: 2,
                }}
              />
              <Typography sx={{ fontWeight: 600, color: "#FFFFFF" }}>
                {f.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#B9D5FD" }}>
                {f.role}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "rgba(255,255,255,0.8)" }}
              >
                {f.focus}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);
