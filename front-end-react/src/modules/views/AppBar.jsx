import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Bar from '../components/Bar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppBar() {
  return (
    <div>
      <Bar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor:'#3097e1' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            href="/premium-themes/onepirate/"
            margin="0"
            fontWeight="700"
            lineHeight= "1.6"
            color= "rgba(0, 0, 0, 0.87)"
            textTransform="uppercase"
            textDecoration="none"
            fontSize="24px"
          >
            {'onepirate'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </Bar>
      <Toolbar />
    </div>
  );
}

export default AppBar;