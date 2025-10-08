import React from "react";
import {
  Box,
  Container,
  Grid,
  Link as MLink,
  Stack,
  Typography,
} from "@mui/material";
import footImg from "../../public/enigme-white-logo.png";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 6,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "rgba(7,11,20,0.5)",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={1}
              sx={{ textAlign: "left", alignItems: "flex-start" }}
            >
              <Box
                component="img"
                src={footImg}
                alt="enigme"
                sx={{
                  height: 40,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <Typography variant="caption" color="text.secondary">
                © {new Date().getFullYear()} Enigme — Creative Studio. Todos os
                direitos reservados.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="text.secondary">
              Conecte-se
            </Typography>
            <Stack>
              <MLink href="mailto:enigmetech@gmail.com">
                enigmetech@gmail.com
              </MLink>
              <MLink
                href="https://www.instagram.com/enigmetech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @enigmetech
              </MLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="text.secondary">
              Endereço
            </Typography>
            <Stack>
              <Typography variant="body2">
                Rua Cel. Ferreira de Araújo, 178
              </Typography>
              <Typography variant="body2">Manaus-AM, Brasil</Typography>
              <Typography variant="body2" color="text.secondary">
                Segunda a Sexta — 8h às 17h
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
