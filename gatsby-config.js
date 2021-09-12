module.exports = {
  siteMetadata: {
    title: 'TechBar',
    description:
        'TechBar provides reliable, affordable and convenient computer services. TechBar provides various services such as repairs, upgrades, installations, consultations and more',
    author: 'TechBar.app',
    siteUrl: 'https://techbar.app',
},
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
        useResolveUrlLoader: true,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-1B6HCB4KZX",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        short_name: "TechBar",
        name: "TechBar.app",
        start_url: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
