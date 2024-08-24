import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const HeadBar = () => {
  return (
    <Box sx={{ flexGrow: 1, zIndex:1000, position: 'relative' }}>
      <AppBar position="static" className="header-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'Fredoka',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Kiddo Quiz
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default HeadBar;
