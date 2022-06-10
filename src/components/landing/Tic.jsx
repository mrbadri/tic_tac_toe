import { motion } from "framer-motion";

const LandingTic = () => {
    return (
        <motion.span
            animate={{ scale: 10, opacity: 0 }}
            transition={{ duration: 0.75, delay: 2.5 }}
        >
            Tic
        </motion.span>
    );
};

export default LandingTic;
