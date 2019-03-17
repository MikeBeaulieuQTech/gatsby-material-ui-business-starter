module.exports = {
  pathPrefix: "/Mines-Dashboard",
  siteMetadata: {
    title: "Mines Data Hub",
    contact: {
      phone: "",
      email: "",
    },
    menuLinks: [
      /* {
        name: "Products",
        link: "/products",
      }, */
      {
        name: "Team",
        link: "/team",
      }, 
      {
        name: "Dashboards",
        link: "/dashboards",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: false,
      },
    },
  ],
};
