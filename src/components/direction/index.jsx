import { useEffect } from "react";

const DirectionProvider = ({ children }) => {
    useEffect(() => {
        document.dir = "rtl";
    }, []);

    return <div>{children}</div>;
};

export default DirectionProvider;
