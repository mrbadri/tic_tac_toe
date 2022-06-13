const getDirection = (locale) => {
    switch (locale) {
        case "fa":
            return "rtl"

        case "en":
            return "ltr"

        default:
            return "ltr"
    }
};

export default getDirection;
