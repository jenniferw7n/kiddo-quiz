import { Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import * as React from 'react'; 

const CustomCard = React.forwardRef(({ children, sx = {}, ...props }, ref) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }} // Ensure motion.div doesn't narrow the width
    >
      <Card ref={ref}
        sx={{
          borderRadius: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '16px',
          textAlign: 'center',
          position: 'relative',
          width: {
            sm: '90%',  
            md: '70%', 
            lg: '60%',  // 60% width for large devices in portrait mode
            xl: '50%',  // 50% width for XL devices (landscape mode or large screens)
          },
          '@media (orientation: vertical)': {
            width: '70%',  // 50% width for landscape orientation on large screens
            height: '70%'
          },
          margin: '0 auto',  // Center the card horizontally
          zIndex: 2,
          ...sx,  // Allow custom styles to override defaults
        }}
        {...props}
      >
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
});

CustomCard.displayName = "CustomCard";

export default CustomCard;
