import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { FileConnection, Query } from '../graphql-types';

const ExperienceLogoQuery = graphql`
    query ExperienceLogoQuery {
        profileImages: allFile(filter: { name: { regex: "/^logo-/" }, sourceInstanceName: { eq: "images" } }) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            base64
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                    name
                }
            }
        }
    }
`;

export interface IExperienceLogoProps {
    name: 'plustv' | 'tablemanager' | 'towncompany';
}

const ExperienceLogo: React.FC<IExperienceLogoProps> = React.memo(({ name }) => {
    const data = useStaticQuery<Query & { profileImages: FileConnection }>(ExperienceLogoQuery);
    const logo = data.profileImages.edges.find(edge => {
        return new RegExp('^logo-' + name).test(edge.node.name);
    });

    return !logo ? null : <Img fluid={logo.node.childImageSharp.fluid as FluidObject} className="image"  />;
});

ExperienceLogo.displayName = 'ExperienceLogo';

export default ExperienceLogo;
