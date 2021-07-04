import { FunctionComponent } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Link, Typography } from '@material-ui/core';

type MarkdownProps = {
    post : string
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
  
export const Markdown : FunctionComponent<MarkdownProps> = ({ post }) => 
    <ReactMarkdown options={options}>
        {post}
    </ReactMarkdown>;