import { motion } from "framer-motion";

const LandingContainer = ({ children }) => {
    return (
        <motion.div
            className="center fixed inset-0 bg-white"
            animate={{
                opacity: [1, 0],
                transitionEnd: {
                    display: "none"
                }
            }}
            transition={{ duration: 0.25, delay: 3 }}
        >
            {children}
        </motion.div>
    );
};

export default LandingContainer;
