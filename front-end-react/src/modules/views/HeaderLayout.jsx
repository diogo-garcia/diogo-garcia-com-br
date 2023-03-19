import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/LocalLibrary';
import PhoneIcon from '@mui/icons-material/Phone';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const iconStyle = {
  width: 24,
  height: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  color: 'white !important',
  mb: 1,
  '&:hover': {
    bgcolor: 'primary.dark',
  },
};

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

const scrollUp = () => {
  const body = document.querySelector('body');
  body.scrollIntoView({
      behavior: 'smooth'
  }, 500)
};

function isOnScreen(id, threshold, mode) {
  const elm = document.getElementById(id);
  threshold = threshold || 0;
  mode = mode || 'visible';

  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;

  return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

function HeaderLayout(props) {
  const refAbout = useRef(null);
  const refExperience = useRef(null);
  const refContact = useRef(null);
  const { sxBackground, children } = props;
  const [ homeOnScreen, setHomeOnScreen ] = useState(null);
  const [ aboutOnScreen, setAboutOnScreen ] = useState("transparent");
  const [ experienceOnScreen, setExperienceOnScreen ] = useState("transparent");
  const [ contactOnScreen, setContactOnScreen ] = useState("transparent");

  useEffect(() => {
    var whosOnScreen = '';
    var threshold = 100;
    const handleScroll = event => {
      if(isOnScreen('middle_screen_home',threshold) && 'home'!==whosOnScreen){
        whosOnScreen = 'home';
        setHomeOnScreen(null);
        setAboutOnScreen("transparent");
        setExperienceOnScreen("transparent");
        setContactOnScreen("transparent");
      } else if(isOnScreen('middle_screen_about',threshold) && 'about'!==whosOnScreen){
        whosOnScreen = 'about';
        setHomeOnScreen("transparent");
        setAboutOnScreen(null);
        setExperienceOnScreen("transparent");
        setContactOnScreen("transparent");
      } else if(isOnScreen('middle_screen_experience', threshold) && 'experience'!==whosOnScreen){
        whosOnScreen = 'experience';
        setHomeOnScreen("transparent");
        setAboutOnScreen("transparent");
        setExperienceOnScreen(null);
        setContactOnScreen("transparent");
      } else if(isOnScreen('middle_screen_contact', threshold) && 'contact'!==whosOnScreen){
        whosOnScreen = 'contact';
        setHomeOnScreen("transparent");
        setAboutOnScreen("transparent");
        setExperienceOnScreen("transparent");
        setContactOnScreen(null);
      }
      //console.log('is on screen',whosOnScreen); 
      //console.log(window.scrollY);
    };


    //verify if action on menu #about #experience or #contact
    var location = window.location.href;
    var locationArr = location.split("#");
    if(locationArr[1]!==''){
      if('about'===locationArr[1])
        refAbout.current.click();
      else if('experience'===locationArr[1])
        refExperience.current.click();
      else if('contact'===locationArr[1])
        refContact.current.click();
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHomeOnScreen, setAboutOnScreen, setExperienceOnScreen, setContactOnScreen]);

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children} 
        <Background sx={sxBackground} />
        <Box className="main-floating-menu" sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 10, zIndex: 100, height: '74px', 
              backdropFilter: 'blur(15px)', borderRadius: '3rem', backgroundColor: 'rgba(0,0,0,.3)', }}>
          <Tooltip title="Scroll Up" onClick={scrollUp}>
            <Fab color="primary" variant="circular" aria-label="scrollup" size="medium" sx={{ backgroundColor: homeOnScreen, top: 5, left: 5 }}>
              <HouseIcon />
            </Fab>
          </Tooltip>
          <a href="#about">
            <Tooltip title="About Me" ref={refAbout}>
              <Fab color="primary" variant="string" aria-label="aboutme" size="medium" sx={{ backgroundColor: aboutOnScreen, top: 5, left: 2 }}>
                <PersonIcon />
              </Fab>
            </Tooltip>
          </a>
          <a href="#experience" ref={refExperience}>
            <Tooltip title="My Experience">
              <Fab color="primary" variant="string" aria-label="experience" size="medium" sx={{ backgroundColor: experienceOnScreen, top: 5, right: 2 }}>
                <BookIcon />
              </Fab>
            </Tooltip>
          </a>
          <a href="#contact" ref={refContact}>
            <Tooltip title="Contact Me">
              <Fab color="primary" variant="string" aria-label="contactme" size="medium" sx={{ backgroundColor: contactOnScreen, top: 5, right: 5 }}>
                <PhoneIcon />
              </Fab>
            </Tooltip>
          </a>
        </Box>
        <Box className="main-floating-menu" sx={{ '& > :not(style)': { m: 1 }, position: 'absolute', left: 10, bottom: 10, zIndex: 100 }}>
          <Grid item sx={{ display: '' }}>
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
        </Box>
      </Container>
    </ProductHeroLayoutRoot>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default HeaderLayout;
