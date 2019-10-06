import { css } from 'linaria';
import React from 'react';
import oc from 'open-color';
import { Link } from 'gatsby';

const FooterBlock = css`
    padding: 1rem;
    margin-top: auto;
    color: ${oc.gray[7]};
    font-size: 0.85rem;
    display: flex;
    justify-content: space-between;

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: ${oc.gray[8]};
        }
    }

    span {
        display: inline-block;
    }
`;

const Footer: React.FC = React.memo(() => {
    return (
        <footer className={FooterBlock}>
            <span>
                Created by{' '}
                <strong>
                    <a href="https://github.com/iamchanii" target="_blank" rel="noreferrer noopener">
                        iamchanii
                    </a>
                </strong>
            </span>
            <span>
                <strong>
                    <Link to="/license">LICENSE</Link>
                </strong>
            </span>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
