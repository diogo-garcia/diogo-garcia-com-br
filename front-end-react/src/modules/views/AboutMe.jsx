import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ME from '../../images/ME.png';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

import { useTranslation } from "react-i18next";

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  width: '100%', 
  display: 'flex',
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const card = {
  width: '100%', 
  mb: '10px',
};
const cardm = {
  width: '100%', 
  ml:'5px',
  mr:'5px', 
  mb: '10px',
};

function AboutMe() {
  const { t } = useTranslation(["translation"]);

  return (
    <Box id="about"
      component="section"
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography id="middle_screen_about" sx={{ mb: 14 }}
          component="h2"
          align="center" 
          variant="h2" 
          marked="center"
          fontWeight="700"
          fontSize="36px"
          lineHeight="1.2"
          textTransform="uppercase"
          textAlign="center"
        >
          {t('about.about_me')}
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <div className="about-me">
                  <div className="about-me-image">
                    <img className="" alt="Diogo Araujo Garcia" src={ME} sx={{ backgroundColor: "#ffff40", width: 200, height: 200, mt: 3 }} />
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={item}>
                <Box sx={number}>
                  <Card sx={card}>
                    <CardHeader sx={{pb:0, textAlign: 'center'}}
                      title={<MilitaryTechIcon fontSize="large" />}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.white" sx={{textAlign: 'center'}}>
                        {t("about.experience")}<br></br>
                        {t("about.plus_10_years")}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={cardm}>
                    <CardHeader sx={{pb:0, textAlign: 'center'}}
                      title={<MilitaryTechIcon fontSize="large" />}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.white" sx={{textAlign: 'center'}}>
                        {t("about.clients")}<br></br>
                        {t("about.plus_20")}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={card}>
                    <CardHeader sx={{pb:0, textAlign: 'center'}}
                      title={<MilitaryTechIcon fontSize="large" />}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.white" sx={{textAlign: 'center'}}>
                        {t("about.projects")}<br></br>
                        {t("about.plus_50")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Typography 
                  variant="h5"
                  fontWeight="300"
                  fontSize="20px"
                  lineHeight="1.3"
                  textAlign="justify"
                >
                  {t("about.about_my_complete")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default AboutMe;
