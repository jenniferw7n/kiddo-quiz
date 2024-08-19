import { motion } from 'framer-motion';
import '@/css/ProgressIndicator.scss'; // Import the CSS for styling

const ProgressIndicator = ({ progress }) => {
  return (
    <div className="progress-container">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="progress-text">{Math.round(progress)}%</span>
      </motion.div>
    </div>
  );
};

export default ProgressIndicator;
