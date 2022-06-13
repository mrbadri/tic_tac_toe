import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
// custom
import loadMessages from "@/utils/locales/loadMessage";
import useLocale from "@/hooks/locales";

const Locales = ({ children }) => {
    const [message, setMessage] = useState();
    const [locale, setLocale] = useLocale();

    console.log("locale:", locale);
    

    useEffect(() => {
        loadMessages().then((massage) => {
            setMessage(message)
        });
        console.log(navigator.language);
    }, [locale]);



    return <IntlProvider locale={"en"}  messages={message}>
        {children}
    </IntlProvider>;
};

export default Locales;
