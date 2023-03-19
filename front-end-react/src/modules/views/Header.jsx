import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HeaderLayout from './HeaderLayout';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ME from '../../images/ME.png';
import Resume from '../../pdf/Resume-Diogo-Araujo-Garcia_2023.pdf';

import { useTranslation } from "react-i18next";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff"
    }
  }
});

export default function Header() {
  const { t } = useTranslation(["translation"]);

  return (
    <ThemeProvider theme={theme}>
      <HeaderLayout
        sxBackground={{
          backgroundColor: '#3097e1', // Average color of the background image.
          backgroundPosition: 'center',
        }}
      >
        <Typography id="middle_screen_home"
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10, lg:'15px' } }}
        >
          {t("header.hello")}
        </Typography>
        <Typography 
          align="center" 
          variant="h1" 
          marked="center"
          fontWeight="700"
          fontSize="48px"
          lineHeight="1.2"
          textTransform="uppercase"
          textAlign="center"
        >
          Diogo Araujo Garcia
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 4 } }}
        >
          {t("header.job")}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            color="white"
            variant="outlined"
            size="large"
            component="a"
            href={Resume}
            sx={{ minWidth: 200, mt: 3, mr: 1, borderRadius: 2 }}
          >
            {t("header.download_resume")}
          </Button>
          <Button
            color="primary" 
            variant="contained"
            size="large"
            component="a"
            href="#contact"
            sx={{ minWidth: 200, mt: 3, ml: 1, borderRadius: 2 }}
          >
            {t("header.lets_talk")}
          </Button>
        </Box>
        <Avatar alt="Diogo Araujo Garcia" src={ME} sx={{ backgroundColor: "#ffff40", width: 200, height: 200, mt: 3 }} />
      </HeaderLayout>
    </ThemeProvider>
  );
}
