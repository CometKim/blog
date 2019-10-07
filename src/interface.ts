import { ReplaceComponentRendererArgs } from 'gatsby';

export type ITemplateProps<T> = ReplaceComponentRendererArgs['props'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};

export interface IPostFrontmatter {
    title: string;
    path: string;
    date: string;
}

export interface IPostTemplateContext extends Omit<IPostFrontmatter, 'path'> {
    html: string;
    excerpt: string;
    previous: IPostFrontmatter | null;
    next: IPostFrontmatter | null;
}
