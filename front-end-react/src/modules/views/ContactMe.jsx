import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import WhatsApp from '@mui/icons-material/WhatsApp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useTranslation } from "react-i18next";

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ContactMe() {
  const { t } = useTranslation(["translation"]);
  const send_message = t('contact.send_message');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [btnSendMessage, setBtnSendMessage] = useState({
    status: null, 
    text: send_message,
  });

  useEffect(()=>{
    setBtnSendMessage({status: false, text: send_message});
  },[setBtnSendMessage, send_message]);
  
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let url = "https://www.diogogarcia.com.br/app/";
    const data = new FormData(evt.currentTarget);
    var json_data = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
    };
    //console.log(json_data);
    setBtnSendMessage({status: true, text: t('contact.sending')});
    
    const requestOptions = {
        method: 'POST',
        mode: "no-cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "params="+JSON.stringify(json_data),
    };
    fetch(url, requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        setBtnSendMessage({status: null, text: send_message});
        setOpenSnackbar(true);
        evt.target.reset();
    })
    .catch(error => {
        console.error('There was an error!', error);
        setBtnSendMessage({status: true, text: t('contact.error_try_again')});
    });
  };

  return (
    <Box id="contact"
      component="section"
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}
    >
      <Snackbar open={openSnackbar} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {t('contact.message_sent_successfully')}
        </Alert>
      </Snackbar>
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
        <Typography id="middle_screen_contact" sx={{ mb: 14 }}
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
          {t('contact.contact_me')}
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                    <Card xs={4} md={12} align="center" sx={{ width: '100%', mt: 2,
                        backgroundColor: "#2196f3",
                        color: "white"}}
                    >
                        <CardContent>
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <EmailOutlined />
                            </Avatar>
                            <Typography variant="h5" component="div">
                              E-mail
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                              contato@diogogarcia.com.br
                            </Typography>
                            <Typography sx={{color:'white'}} variant="body2" component="a" target="_blank" href="mailto:contato@diogogarcia.com.br">
                              {t('contact.send_a_message')}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card xs={4} md={12} align="center" sx={{ width: '100%', mt: 2,
                        backgroundColor: "#2196f3",
                        color: "white"}}
                    >
                        <CardContent>
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <WhatsApp />
                            </Avatar>
                            <Typography variant="h5" component="div">
                              WhatsApp
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                              +55 21 99480-1859
                            </Typography>
                            <Typography sx={{color:'white'}} variant="body2" component="a" target="_blank" href="https://wa.me/5521994801859">
                              {t('contact.send_a_message')}
                            </Typography>
                        </CardContent>
                    </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
                <Box
                    sx={{
                    my: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label={t('contact.your_full_name')}
                        id="name"
                        autoComplete="name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label={t('contact.email_address')}
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="message"
                        label={t('contact.your_message_here')}
                        name="message"
                        rows={5}
                        inputProps={{ 'data-lpignore': true }} //lastpass error fix on enter press
                        multiline
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={btnSendMessage.status}
                    >
                        {btnSendMessage.text}
                    </Button>
                    </Box>
                </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ContactMe;
