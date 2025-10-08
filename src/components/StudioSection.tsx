
import React from 'react';
import { Paper, Stack, Typography, Button, Box, IconButton } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const StudioSection: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(180deg, rgba(11,16,32,0.8), rgba(11,16,32,0.6))',
      }}
    >
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Nosso <Box component="span" sx={{ color: 'primary.main' }}>Studio</Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Criamos experiências digitais com foco em performance, acessibilidade e design. 
          Unimos estratégia, UX/UI e engenharia em um time compacto e eficiente.
        </Typography>
        <Button endIcon={<ArrowForwardRoundedIcon />} variant="outlined" sx={{ alignSelf: 'flex-start' }}>
          Como chegamos?
        </Button>
        <Box
          sx={{
            mt: 'auto',
            height: 220,
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.08)',
            background:
              'radial-gradient(300px 140px at 70% 30%, rgba(11,76,254,0.35), transparent), linear-gradient(120deg, #0C01B7 0%, #0B4CFE 50%, #0a0f1e 100%)',
          }}
        />
        <Stack direction="row" spacing={1}>
          <Typography variant="caption" color="text.secondary">Siga-nos</Typography>
          <IconButton size="small" aria-label="facebook" sx={{ color: 'text.secondary' }}>
            <i className="pi pi-facebook" />
          </IconButton>
          <IconButton size="small" aria-label="instagram" sx={{ color: 'text.secondary' }}>
            <i className="pi pi-instagram" />
          </IconButton>
          <IconButton size="small" aria-label="linkedin" sx={{ color: 'text.secondary' }}>
            <i className="pi pi-linkedin" />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default StudioSection;
