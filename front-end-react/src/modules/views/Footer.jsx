import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import i18n from "../../i18n";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useTranslation } from "react-i18next";

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://www.diogogarcia.com.br/">
        DiogoGarcia.com.br
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

function changeLanguageOnClick(evt) {
  i18n.changeLanguage(evt.target.value);
  window.localStorage.setItem("lingua", evt.target.value);
  //console.log(window.localStorage.getItem("lingua"));
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.main',
  color: 'white',
  mr: 1,
  '&:hover': {
    bgcolor: 'primary.dark',
  },
};

const LANGUAGES = [
  {
    value: 'EN_US',
    label: 'English',
  },
  {
    value: 'PT_BR',
    label: 'Português',
  },
];

export default function Footer() {
  const { t } = useTranslation(["translation"]);

  useEffect(() => {
    //sessionStorage keeps the session util the window is closed
    //localStorage does not expire the session even when the window is closed
    if(!window.localStorage.getItem("lingua"))
      window.localStorage.setItem("lingua", "EN_US");
    i18n.changeLanguage(window.localStorage.getItem("lingua"));
  },[]);

  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#e0e0e0' }}
    >
      <Container sx={{ my: 8, display: 'flex', mb: 13 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" target="_blank" href="https://www.linkedin.com/in/diogo-araujo-garcia/" sx={iconStyle}>
                  <LinkedInIcon />
                </Box>
                <Box component="a" target="_blank" href="https://github.com/diogo-garcia/diogo-garcia-com-br/" sx={iconStyle}>
                  <GitHubIcon />
                </Box>
                <Box component="a" target="_blank" href="https://wa.me/5521994801859" sx={iconStyle}>
                  <WhatsAppIcon />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              {t('footer.language')}
            </Typography>
            <TextField
              value={window.localStorage.getItem("lingua")}
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
              onChange={(e) => changeLanguageOnClick(e)}
            >
              {LANGUAGES.map((language) => (
                <option value={language.value} key={language.value}>
                  {language.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
