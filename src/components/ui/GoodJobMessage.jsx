import Confetti from "react-confetti";
import { motion } from 'framer-motion';
import '@/css/Message.scss'; // Add your styles here

const GoodJobMessage = () => {

    return (
        <motion.div
            className="congrats-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <p>Good job!</p>
            <Confetti className="confetti" recycle={false} />
        </motion.div>
     );
}
 
export default GoodJobMessage;