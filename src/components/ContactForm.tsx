import React, { useState } from "react";
import { Stack, TextField, Button, Alert } from "@mui/material";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const fieldSx = {
  "& .MuiInputBase-root": {
    bgcolor: "rgba(255,255,255,0.04)",
    borderRadius: 2,
    backdropFilter: "blur(6px)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.12)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.main",
  },
  "& .MuiInputLabel-root": {
    color: "text.secondary",
  },
  "& .MuiInputBase-input, & .MuiInputBase-inputMultiline": {
    color: "text.primary",
  },
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSent(false);

    // 👉 mantém exatamente esse formato:
    emailjs
      .send("service_ya0nhk2", "template_vbah83o", form, "N8HBrc8DVq7PYnYKU")
      .then(() => {
        toast.success("Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
        setSent(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack spacing={2}>
        <TextField
          value={form.name}
          onChange={handleChange("name")}
          variant="outlined"
          fullWidth
          required
          placeholder="Nome"
          sx={fieldSx}
          InputLabelProps={{
            shrink: true, // 👈 força o label a subir sempre
          }}
        />

        <TextField
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          variant="outlined"
          fullWidth
          required
          sx={fieldSx}
          placeholder="Email"
          helperText="Usaremos este e-mail para responder você."
          InputLabelProps={{ shrink: true }} // 👈 idem
        />

        <TextField
          placeholder="Mensagem"
          value={form.message}
          onChange={handleChange("message")}
          variant="outlined"
          fullWidth
          required
          multiline
          minRows={5}
          sx={fieldSx}
          InputLabelProps={{ shrink: true }} // 👈 idem
        />
        {sent && (
          <Alert severity="success">Recebemos sua mensagem. Obrigado!</Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          sx={{
            alignSelf: { xs: "stretch", md: "flex-start" },
            borderRadius: 2,
            fontWeight: 700,
          }}
        >
          {loading ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
