import React, { FC } from 'react';
import { PostBodyHtmlRenderer } from './PostBodyHtmlRenderer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostBodyTextProps {
  html: string;
}

export const PostBodyText: FC<PostBodyTextProps> = ({ html }) => {
  return html ? (
    <PostBodyHtmlRenderer dangerouslySetInnerHTML={{ __html: html }} />
  ) : null;
};

PostBodyText.displayName = 'PostBodyText';
