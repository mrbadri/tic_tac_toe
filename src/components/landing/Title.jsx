import { motion } from "framer-motion";

const LandingTitle = ({ children }) => {
    return (
        <motion.h1
            className="text-4xl md:text-6xl font-semibold opacity-0 h-full w-full center"
            animate={{ scale: [0.25, 1.5, 1.5, 1], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.75 }}
        >
            {children}
        </motion.h1>
    );
};

export default LandingTitle;
