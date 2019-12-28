import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { FaviconImageQuery } from '../graphql-types';

export interface IFaviconImageProps {}

const FaviconImage: React.FC<IFaviconImageProps> = React.memo(() => {
  const { faviconImage } = useStaticQuery<FaviconImageQuery>(graphql`
    query FaviconImage {
      faviconImage: file(name: { eq: "favicon" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 32) {
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
  `);

  return <Img fluid={faviconImage.childImageSharp.fluid as FluidObject} className="favicon-image" />;
});

FaviconImage.displayName = 'FaviconImage';

export default FaviconImage;
