import { motion } from "framer-motion";

const LandingToe = () => {
    return (
        <motion.span
            animate={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.75, delay: 2.5 }}
        >
            Toe
        </motion.span>
    );
};

export default LandingToe;
