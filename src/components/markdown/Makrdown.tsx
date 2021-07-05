import { FC } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Link, Typography } from '@material-ui/core';
import { Post } from '../master-layout/MasterLayout';

type MarkdownProps = {
    post : Post
}

const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h5',
        },
      },
      h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
      h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
      h4: {
        component: Typography,
        props: { gutterBottom: true, variant: 'caption', paragraph: true },
      },
      p: { component: Typography, props: { paragraph: true } },
      a: { component: Link }
    },
  };
  
const Markdown : FC<MarkdownProps> = ({ post }) => 
    <ReactMarkdown options={options}>
        {post.description}
    </ReactMarkdown>;

export default Markdown;