import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
// custom
import loadMessages from "@/utils/locales/loadMessage";
import useLocale from "@/hooks/locales/useLocale";

const Locales = ({ children }) => {
    const [message, setMessage] = useState();
    const [locale] = useLocale();

    useEffect(() => {
        loadMessages(locale).then((message) => setMessage(message));
    }, [locale]);

    return (
        <>
            {message && (
                <IntlProvider locale={locale} messages={message}>
                    {children}
                </IntlProvider>
            )}
        </>
    );
};

export default Locales;
