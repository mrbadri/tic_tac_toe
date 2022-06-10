import { motion } from "framer-motion";

const LandingTac = () => {
    return (
        <motion.span
            animate={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.75, delay: 2.5 }}
        >
            Tac
        </motion.span>
    );
};

export default LandingTac;
