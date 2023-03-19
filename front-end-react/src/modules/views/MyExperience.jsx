import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import PhpIcon from '@mui/icons-material/Php';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import AppsIcon from '@mui/icons-material/Apps';
import JavascriptIcon from '@mui/icons-material/Javascript';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  bgcolor: 'background.paper',
  borderRadius: '4px',
};

function MyExperience() {
  return (
    <Box id="experience"
      component="section"
      sx={{ display: 'flex', bgcolor: '#3097e1', overflow: 'hidden' }}
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
        <Typography id="middle_screen_experience" className="white" sx={{ mb: 14 }}
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
          My Experience
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant="h6" sx={{ my: 5, mb: 2 }}
                  fontWeight="700"
                  fontSize="18px"
                  lineHeight="1.6"
                  textTransform="uppercase">
                  Frontend Development
                </Typography>
                <Container sx={{ display: 'flex', mb: 3 }}>
                  <List sx={{width: '100%'}}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <HtmlIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="HTML" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CssIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="CSS" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <JavascriptIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Javascript" secondary="Experienced" />
                    </ListItem>
                  </List>
                  <List sx={{width: '100%'}}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SettingsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Boostrap" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SettingsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="jQuery" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SettingsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="React" secondary="Intermediate" />
                    </ListItem>
                  </List>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant="h6" sx={{ my: 5, mb: 2 }}
                  fontWeight="700"
                  fontSize="18px"
                  lineHeight="1.6"
                  textTransform="uppercase">
                  Backend Development
                </Typography>
                <Container sx={{ display: 'flex', mb: 3 }}>
                  <List sx={{width: '100%'}}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="PHP" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AppsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="NodeJs" secondary="Intermediate" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AppsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Java" secondary="Intermediate" />
                    </ListItem>
                  </List>
                  <List sx={{width: '100%'}}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <StorageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Oracle" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <StorageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Postgres" secondary="Experienced" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <StorageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Mysql" secondary="Experienced" />
                    </ListItem>
                  </List>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default MyExperience;
