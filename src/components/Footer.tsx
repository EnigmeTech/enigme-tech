import React from "react";
import {
  Box,
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
        pt: 2,
        pb: 1,
        borderTop: "1px solid rgba(11,76,254,0.1)",
        background:
          "linear-gradient(180deg, rgba(11,76,254,0.08) 0%, rgba(15,24,52,0.9) 100%)",
        backdropFilter: "blur(8px)",
        color: "#EAF2FF",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Box sx={{ px: { xs: 3, sm: 6, md: 10 } }}>
        <Stack spacing={1} sx={{ alignItems: "flex-start", mb: 4 }}>
          <Box
            component="img"
            src={footImg}
            alt="Enigme Tech"
            onClick={() => navigate("/")}
            sx={{
              height: 60,
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#EAF2FF",
              }}
            >
              Links Institucionais
            </Typography>
            <Stack spacing={1.2}>
              <MLink href="/contato" underline="hover" color="#B9D5FD">
                Contato
              </MLink>
              <MLink href="/sobre" underline="hover" color="#B9D5FD">
                Quem somos
              </MLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#EAF2FF",
              }}
            >
              Enigme Manaus
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="#B9D5FD">
                Rua Cel. Ferreira de Araújo, 178
              </Typography>
              <Typography variant="body2" color="#B9D5FD">
                Segunda a Sexta — 8h às 17h
              </Typography>

              <Stack
                direction="row"
                spacing={1.2}
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <PhoneIphoneRoundedIcon
                  sx={{ fontSize: 18, color: "#6EA3F3" }}
                />
                <Typography variant="body2" color="#B9D5FD">
                  +55 (92) 99231-3988
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailRoundedIcon sx={{ fontSize: 18, color: "#6EA3F3" }} />
                <MLink
                  href="mailto:enigmetech@gmail.com"
                  color="#B9D5FD"
                  underline="hover"
                >
                  enigmetech@gmail.com
                </MLink>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#EAF2FF",
              }}
            >
              Canais rápidos
            </Typography>
            <Stack spacing={1.2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <WhatsAppIcon sx={{ fontSize: 18, color: "#6EA3F3" }} />
                <MLink
                  href="https://wa.me/5592992313988?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Enigme%20Tech."
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#B9D5FD"
                >
                  Falar pelo WhatsApp
                </MLink>
              </Stack>
              <MLink
                href="https://www.instagram.com/enigmetech/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="#B9D5FD"
              >
                Instagram @enigmetech
              </MLink>
              <MLink
                href="https://www.linkedin.com/in/enigme-tech-0b5251313/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="#B9D5FD"
              >
                LinkedIn
              </MLink>
            </Stack>
          </Grid>
        </Grid>
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.1)",
            mt: 4,
            mb: 2,
          }}
        />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
        >
          <Typography variant="caption" color="#B9D5FD">
            © {new Date().getFullYear()} Enigme Creative Studio
          </Typography>
          <Typography variant="caption" color="#B9D5FD">
            Feito por Enigme Tech
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
