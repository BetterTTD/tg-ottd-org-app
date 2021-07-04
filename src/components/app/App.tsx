import React, { FunctionComponent } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Header } from '../header/Header';
import { Grid } from '@material-ui/core';
import { FeaturedPost } from '../featured-post/FeaturedPost';

export type Post = {
    title : string,
    date : string,
    description : string,
    image?: string,
    imageTitle?: string
}

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    }
];

type AppProps = {
    title : string
}

export const App : FunctionComponent<AppProps> = ({ title }) => 
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header title={title} />
            <main>
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => <FeaturedPost post={post} />)}
                </Grid>
            </main>
        </Container>
    </React.Fragment>