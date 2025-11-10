import { Box, Button, Stack, Typography, Container } from "@mui/material";
import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import WhatsApp from "@mui/icons-material/WhatsApp";

const ContactPage: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/5592992313988?text=Oi%2C%20pessoal%20da%20Enigme%20Tech!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs.";

  return (
    <Stack spacing={0}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box
          sx={{
            width: "100vw",
            height: "90%",
            position: "relative",
          }}
        >
          <Hero />
        </Box>
      </Stack>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: 2, sm: 3, md: 6 },
          mt: 4,
        }}
      >
        <CTASection />
        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 2,
            p: 3,
            mt: 3,
            background:
              "linear-gradient(180deg, rgba(11,16,32,0.8), rgba(11,16,32,0.6))",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 3 }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent={{ xs: "flex-start", md: "space-between" }}
          >
            {/* texto (esquerda) */}
            <Stack spacing={1} sx={{ maxWidth: { md: "70%" } }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <WhatsApp
                  sx={{
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    color: "#25D366",
                  }}
                />
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
                  }}
                >
                  Falar pelo WhatsApp
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
              >
                Fale com a Enigme Tech agora mesmo pelo WhatsApp. É rápido e
                prático!
              </Typography>
            </Stack>

            <Button
              variant="contained"
              size="large"
              onClick={() => window.open(whatsappUrl, "_blank")}
              startIcon={<WhatsApp />}
              sx={{
                ml: { md: "auto" },
                alignSelf: { xs: "stretch", md: "center" },
                whiteSpace: "nowrap",
                fontSize: { xs: "0.85rem", md: "1rem" },
                py: { xs: 1, sm: 1.2, md: 1.4 },
                px: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              Abrir conversa
            </Button>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
};

export default ContactPage;
