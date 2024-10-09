// AnimateRoutes.jsx

import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// AnimateRoutes.jsx
const pageVariants = {
    initial: {
      opacity: 0,
      x: "100%", // Start the next page off-screen to the right
    },
    enter: {
      opacity: 1,
      x: 0, // Move it into view
    },
    exit: {
      opacity: 0,
      x: "-100%", // Move the current page off-screen to the left
    },
  };
  
  const AnimateRoutes = () => {
    const location = useLocation();
  
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={{ type: "tween", duration: 0.5 }} // Smooth transition
        >
          <Outlet /> {/* Renders the matched child route */}
        </motion.div>
      </AnimatePresence>
    );
  };
  

export default AnimateRoutes;
