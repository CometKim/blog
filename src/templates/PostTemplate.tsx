import React from 'react';
import Layout from '../components/layout';
import { IPostTemplateContext, ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    return (
        <Layout>
            <code>
                <pre>{JSON.stringify(props, null, 4)}</pre>
            </code>
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
