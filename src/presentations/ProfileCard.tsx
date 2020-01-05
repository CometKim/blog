import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

export interface IProfileCardProps {}

const ProfileCard: React.FC<IProfileCardProps> = React.memo(() => {
  const {
    site: {
      siteMetadata: { profileCard },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          profileCard {
            description
            github
            name
          }
        }
      }
    }
  `);

  return (
    <div className="mt-16 mb-8">
      <hr className="mb-16 mx-auto w-3/4" />
      <Link to="/about" title="프로필 페이지로 이동" className="font-bold">
        {profileCard.name}
      </Link>
      <p>{profileCard.description}</p>
      <ul className="mt-4">
        <li>
          <a
            href={profileCard.github}
            rel="noopener noreferer"
            title="Github 프로필로 이동"
            className="inline-flex items-center"
            target="_blank"
          >
            <DiGithubBadge className="mr-1" />
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
});

ProfileCard.displayName = 'ProfileCard';

export default ProfileCard;
