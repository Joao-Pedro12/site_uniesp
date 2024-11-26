import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const Cursos = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom>
          Conheça Mais Sobre a Faculdade UNIESP
        </Typography>
        <Typography variant="body1" paragraph>
          A Faculdade UNIESP é dedicada a oferecer educação de qualidade, com foco em capacitar os alunos para uma vida profissional de sucesso. Nossa infraestrutura moderna e corpo docente qualificado criam um ambiente ideal para aprendizado e crescimento.
        </Typography>
        <Typography variant="body1" paragraph>
          Descubra mais sobre nossa estrutura, serviços e oportunidades disponíveis para nossos alunos.
        </Typography>
      </Paper>

      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <img
              src="https://tempodeinovacao.com.br/wp-content/uploads/2020/10/Programacao-480x270.jpg"
              alt="Sistemas para Internet"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography variant="h6" gutterBottom mt={2}>
              Sistemas para Internet
            </Typography>
            <Typography variant="body2">
              Um curso rico em inovação que promete uma carreira próspera e muito dinheiro
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <img
              src="https://ctcdigital.com.br/wp-content/uploads/2020/02/Curso-online-de-fisioterapia-1.jpg"
              alt="Fisioterapia"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography variant="h6" gutterBottom mt={2}>
              Fisioterapia
            </Typography>
            <Typography variant="body2">
              Contamos com uma exelente estrutura para as melhores aulas práticas.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <img
              src="https://i0.wp.com/www.revistaapolice.com.br/wp-content/uploads/2016/09/odontol%C3%B3gico.jpg?fit=1024%2C683&ssl=1"
              alt="Odontologia"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography variant="h6" gutterBottom mt={2}>
              Odontologia
            </Typography>
            <Typography variant="body2">
              Infraestrutura moderna com salas de aula, laboratórios e equipamentos especializados, além da clínica escola.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom mt={2}>
              Veterinária
            </Typography>
            <Typography variant="body2">
              A UNIESP também é o lugar do seu pet e o melhor lugar para aprender sobre ele.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom mt={2}>
              Publicidade
            </Typography>
            <Typography variant="body2">
              Transformando e renovando imagens e propagandas com trabalhos bem feitos e criatividade.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cursos;
