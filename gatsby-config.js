module.exports = {
  siteMetadata: {
    title: "Travis Ricks Code Notes",
    description: `Travis Ricks Code Notes`,
    author: "Travis Ricks",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travis Ricks Code Notes`,
        short_name: `TRCode`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
  ],
};
