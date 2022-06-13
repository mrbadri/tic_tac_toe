import { useState } from "react";

const useLocale = (initial = "en") => {
    const [locale, setLocale] = useState(initial);
    
    if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
        console.log(window.navigator.language);
    }

    // switch (navigator.language) {
    //     case "en-US":
    //         setLocale("test");
    //         break;

    //     case "fa":
    //         setLocale("fa");
    //         break;

    //     default:
    //         setLocale("en");
    //         break;
    // }

    return [locale, setLocale];
};

export default useLocale;
