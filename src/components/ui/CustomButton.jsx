import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ color, size }) => ({
  backgroundColor: color || '#ffcc00', // Default to yellow if no color prop is passed
  color: '#fff',
  fontSize: size || '1.2rem',
  padding: '10px 20px',
  margin: '10px',
  border: '#fff 10px solid',
  borderRadius: '50px', 
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)', 
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)', // Slight zoom on hover
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
    backgroundColor: color || '#ffcc00',
  },
  zIndex: 1000
}));

export default CustomButton;
