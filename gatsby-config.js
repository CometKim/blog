module.exports = {
    siteMetadata: {
        title: `imch.dev`,
        description: `imch.dev`,
        author: `iamchanii`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-linaria`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `imch.dev`,
                short_name: `imch.dev`,
                start_url: `/`,
                background_color: `#222`,
                theme_color: `#222`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/posts`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-generate-typings`,
            options: {
                dest: `./src/graphql-types.d.ts`,
            },
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: ['Noto Sans KR:300,700'],
                },
            },
        },
        `gatsby-plugin-less`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
