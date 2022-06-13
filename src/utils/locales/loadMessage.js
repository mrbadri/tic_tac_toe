const loadMessages = (locale) => {
    switch (locale) {
        case "en":
            return import("@/utils/locales/json/en.json");
            
        case "fa":
            return import("@/utils/locales/json/fa.json");

        default:
            return import("@/utils/locales/json/en.json");
    }
};
 
export default loadMessages;