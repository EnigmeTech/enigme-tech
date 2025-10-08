import React from "react";
import { Paper, Stack, Typography, Button, Box } from "@mui/material";
import ContactForm from "./ContactForm";
import sideImg from "../../public/contact-form.jpg";

const CTASection: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(11,16,32,0.85), rgba(11,16,32,0.6))",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="stretch"
        justifyContent="space-between"
      >
        {/* Imagem lateral */}
        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            height: { xs: 220, md: "600px" },
          }}
        >
          <Box
            component="img"
            src={sideImg}
            alt="Equipe desenvolvendo software na Enigme"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              objectPosition: { xs: "50% 15%", md: "50% 50%" },
            }}
          />
          {/* overlay opcional (desative se não quiser) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(12,1,183,0.15) 0%, rgba(11,76,254,0.10) 100%)",
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* Formulário de e-mail */}
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Stack spacing={1} sx={{ mb: { xs: 3, md: 4 } }} textAlign="left">
            <Typography variant="overline" color="text.secondary">
              Olá, estamos ouvindo
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
              Fale mais sobre o seu{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                projeto
              </Box>
            </Typography>
          </Stack>
          <ContactForm />
        </Box>
      </Stack>
    </Paper>
  );
};

export default CTASection;
