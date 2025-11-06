import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link as MLink,
  Stack,
  Typography,
} from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import footImg from "/enigme-white-logo.png";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        pt: 6,
        pb: 3,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(7,11,20,0.72) 0%, rgba(7,11,20,0.92) 100%)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={4} sx={{ pb: 2 }}>
          <Grid item xs={12}>
            <Stack spacing={1} sx={{ alignItems: "flex-start" }}>
              <Box
                component="img"
                src={footImg}
                alt="Enigme Tech"
                onClick={() => navigate("/")}
                sx={{ height: 60, objectFit: "contain" }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: 2, color: "#fff" }}
            >
              Links Institucionais
            </Typography>
            <Stack spacing={1.2}>
              <MLink href="/contato" underline="hover" color="inherit">
                Contato
              </MLink>
              <MLink href="/sobre" underline="hover" color="inherit">
                Quem somos
              </MLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: 2, color: "#fff" }}
            >
              Enigme Manaus
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                Rua Cel. Ferreira de Araújo, 178
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Segunda a Sexta — 8h às 17h
              </Typography>

              <Stack
                direction="row"
                spacing={1.2}
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <PhoneIphoneRoundedIcon fontSize="small" />
                <Typography variant="body2">+55 (92) 99231-3988</Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailRoundedIcon fontSize="small" />
                <MLink
                  href="mailto:enigmetech@gmail.com"
                  color="inherit"
                  underline="hover"
                >
                  enigmetech@gmail.com
                </MLink>
              </Stack>
            </Stack>
          </Grid>

          {/* Coluna 3: Canais rápidos */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: 2, color: "#fff" }}
            >
              Canais rápidos
            </Typography>
            <Stack spacing={1.2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <WhatsAppIcon fontSize="small" />
                <MLink
                  href="https://wa.me/5592992313988?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Enigme%20Tech."
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="inherit"
                >
                  Falar pelo WhatsApp
                </MLink>
              </Stack>
              <MLink
                href="https://www.instagram.com/enigmetech/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
              >
                Instagram @enigmetech
              </MLink>
              <MLink
                href="https://www.linkedin.com/in/enigme-tech-0b5251313/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
              >
                LinkedIn
              </MLink>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mt: 4, mb: 2 }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Enigme Creative Studio
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Feito por Enigme Tech
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
