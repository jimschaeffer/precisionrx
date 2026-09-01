module.exports = {
  name: "Precision RX Compounding Pharmacy",
  email: "info@prxpharm.com",
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
  hasMap: "https://maps.app.goo.gl/CfnQvxVxwqKFbkVv7",
  // Mon-Fri 8am-5pm, closed weekends. Drives openingHoursSpecification in the
  // Pharmacy schema - keep this in sync with the Google Business Profile.
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: ["Alabama", "Florida", "Georgia"],
  socials: {
    facebook: "https://www.facebook.com/p/Precision-Rx-61566822557757/",
    instagram: "https://www.instagram.com/precisionrx_/",
    tiktok: "https://www.tiktok.com/@precisionrx",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  //! Must match the Netlify PRIMARY domain. prxpharm.com is primary and
  //! www.prxpharm.com redirects to it, so every canonical/og:url/sitemap entry
  //! built from this must use the apex - pointing them at www made all 17
  //! sitemap URLs 301.
  domain: "https://prxpharm.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
