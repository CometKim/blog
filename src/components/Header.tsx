import { Link } from 'gatsby';
import { css } from 'linaria';
import React from 'react';
import oc from 'open-color';
import FaviconImage from './FaviconImage';

const HeaderBlock = css`
    height: 3.5rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    .profile-and-title {
        margin-right: auto;
        display: flex;
        align-items: center;

        > h1 {
            margin: 0;
            font-size: 1rem;

            > a {
                text-decoration: none;
                color: ${oc.gray[8]};
                display: flex;
                align-items: center;

                .favicon-image {
                    width: 2rem;
                    margin-right: 0.5em;
                }
            }
        }
    }

    .links {
        margin-left: auto;
        display: flex;
        align-items: center;

        > a {
            color: ${oc.gray[5]};
            text-decoration: none;
            font-size: 1rem;

            &.active {
                position: relative;
                color: ${oc.gray[8]};
                font-weight: bold;

                :after {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -0.25rem;
                    height: 2px;
                    display: block;
                    content: '';
                    background-color: ${oc.gray[8]};
                }
            }

            &:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }
`;

export interface IHeaderProps {
    siteTitle: string;
}

const Header: React.FC<IHeaderProps> = React.memo(() => {
    return (
        <div className={HeaderBlock}>
            <div className="profile-and-title">
                <h1>
                    <Link to="/posts">
                        <FaviconImage />
                        imch.dev
                    </Link>
                </h1>
            </div>
            <div className="links">
                <Link to="/posts" partiallyActive activeClassName="active">
                    blog
                </Link>
                <Link to="/resume" partiallyActive activeClassName="active">
                    resume
                </Link>
            </div>
        </div>
    );
});

Header.displayName = 'Header';

export default Header;
