import React from "react";
import { AppBar, Toolbar, Container, Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "/enigme-logo.png";

const Glass = styled(AppBar)({
  background: "rgba(11,16,32,0.6)",
  backdropFilter: "blur(8px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "none",
});

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const isActive = (p: string) => pathname === p;

  return (
    <Glass position="sticky" color="transparent">
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          disableGutters
          sx={{ py: 1, display: "flex", alignItems: "center" }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="enigme"
              sx={{ height: 34, mr: 2 }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1.5}>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              variant={isActive("/") ? "outlined" : "text"}
            >
              Início
            </Button>
            <Button
              component={RouterLink}
              to="/sobre"
              color="inherit"
              variant={isActive("/sobre") ? "outlined" : "text"}
            >
              Sobre
            </Button>
            <Button
              component={RouterLink}
              to="/contato"
              color="inherit"
              variant={isActive("/contato") ? "outlined" : "text"}
            >
              Contato
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </Glass>
  );
};

export default Navbar;
