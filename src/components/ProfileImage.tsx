import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { css } from 'linaria';
import React from 'react';
import { ProfileImageQuery } from '../graphql-types';

export const ProfileImageBlock = css`
    display: inline-block;
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 100%;
`;

const ProfileImage: React.FC = React.memo(() => {
    const { profileImage } = useStaticQuery<ProfileImageQuery>(graphql`
        query ProfileImage {
            profileImage: file(name: { eq: "profile" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                    }
                }
            }
        }
    `);

    return <Img className={ProfileImageBlock} fluid={profileImage.childImageSharp.fluid as FluidObject} />;
});

ProfileImage.displayName = 'ProfileImage';

export default ProfileImage;
