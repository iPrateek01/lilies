import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 1,  // Current page remains fully visible
    x: "100%",    // Start off-screen to the right
  },
  enter: {
    opacity: 1,   // Fully visible
    x: 0,         // Move into view
    transition: {
      duration: 0.2,  // Duration of the slide-in animation
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,   // Keep current page fully visible
    x: "100%",    // Current page stays in place while next page comes in
    transition: {
      duration: 0,  // No transition for the exit
    },
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
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
