import { motion } from 'framer-motion';
import '@/css/Message.scss'; // Add your styles here

const TryAgainMessage = ({msg}) => {
  return (
    <>
     {/* <div className='tryAgain-img'></div> */}
      <motion.div
        className="try-again-message"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <p>{msg}</p>
      </motion.div>
    </>
  );
};

export default TryAgainMessage;
