import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));
  
type MainProps = {
    title : string,
    posts : string []
}

export const Main : FunctionComponent<MainProps> = ({ posts, title }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {posts.map((post) => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
        </Grid>
    );
}