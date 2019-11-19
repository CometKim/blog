import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { ProfileImageQuery } from '../graphql-types';

export const ProfileImg = styled(Img)`
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
                    fluid(quality: 100, maxWidth: 300) {
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

    return <ProfileImg fluid={profileImage.childImageSharp.fluid as FluidObject} />;
});

ProfileImage.displayName = 'ProfileImage';

export default ProfileImage;
