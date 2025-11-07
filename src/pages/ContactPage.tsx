import { Box, Button, Stack, Typography } from "@mui/material";
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
      <CTASection />
      <Box
        sx={{
          flex: 1,
          minWidth: 280,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 2,
          p: 3,
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
              <WhatsApp sx={{ fontSize: 36, color: "#25D366" }} />
              <Typography variant="h5" fontWeight={700}>
                Falar pelo WhatsApp
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
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
            }}
          >
            Abrir conversa
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ContactPage;
