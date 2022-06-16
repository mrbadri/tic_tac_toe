import { useState } from "react";

let initial = "en";

if (typeof window !== "undefined") {
    const localeSaved = localStorage.getItem("locale");

    if (localeSaved) {
        // use locale saved
        initial = localeSaved;
    } else {
        // for the first user login
        switch (navigator.language) {
            case "fa":
                initial = "fa";
                break;

            default:
                initial = "en";
                break;
        }
    }
}

const useLocale = (initialLocale = initial) => {
    const [locale, setLocale] = useState(initialLocale);

    if (typeof window !== "undefined") localStorage.setItem("locale", locale);

    return [locale, setLocale];
};

export default useLocale;
