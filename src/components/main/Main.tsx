import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { FunctionComponent, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));
  
type MainProps = {
    title : string,
    posts : string[]
}

const Main : FunctionComponent<MainProps> = ({ posts, title }) => {
    const classes = useStyles();
    const [_posts, setPosts] = React.useState<Array<string>>([]);
    
    useEffect(() => {
        posts.forEach(post => {
            fetch(post)
            .then((res) => res.text())
            .then((md) => {
                setPosts([..._posts, md]);
            });
        });
    });

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {_posts.map((post, id) => (
                <Markdown className={classes.markdown} key={id}>
                    {post}
                </Markdown>
            ))}
        </Grid>
    );
};

export default Main;
