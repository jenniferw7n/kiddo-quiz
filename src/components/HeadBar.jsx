import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, AppBar,Modal, Container,Toolbar,Typography } from '@mui/material';
import CustomAvatarLink from './ui/CustomAvatarLink';
import InfoFormCard from './InfoFormCard';
import { useSelector } from 'react-redux';

const HeadBar = () => {
  const [openModal, setOpenModal] = useState(false);

  const kidInfo = useSelector((state)=>state.kidInfo);

  const openAvatarLink = ()=> setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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
            <CustomAvatarLink name={kidInfo?.name? kidInfo.name: ""} onClick={openAvatarLink}/>
          </Toolbar>
        </Container>
      </AppBar>
     
        <Modal padding='20px'
          open={openModal}
          aria-labelledby="user-info-modal"
          aria-describedby="form-to-edit-user-info"
        >
          <Box sx={{ margin: 2 }}>
            <InfoFormCard showCloseButton={true} onClose={handleClose}/>
          </Box>
      
      </Modal>
    </Box>
  );
};

export default HeadBar;
