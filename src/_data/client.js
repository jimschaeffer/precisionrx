module.exports = {
    name: "Precision RX Compounding Pharmacy",
    email: "help@codestitch.app",
    phoneForTel: "+12058230780",
    phoneFormatted: "(205) 823-0780",
    address: {
        lineOne: "3325 Rocky Ridge Plz, Ste 207",
        city: "Vestavia Hills",
        state: "AL",
        zip: "35243",
        country: "US",
        mapLink: "https://maps.app.goo.gl/CfnQvxVxwqKFbkVv7",
    },
    socials: {
        facebook: "https://www.facebook.com/p/Precision-Rx-61566822557757/",
        instagram: "https://www.instagram.com/precisionrx_/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.precisionrxcompounding.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
