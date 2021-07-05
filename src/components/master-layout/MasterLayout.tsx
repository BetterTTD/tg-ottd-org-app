import { FC } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Header } from '../header/Header';
import { Grid } from '@material-ui/core';
import { FeaturedPost } from '../featured-post/FeaturedPost';
import Banner from '../banner/Banner';

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
        imageTitle: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageTitle: 'Image Text',
    }
];

let bannerData = {
    title: 'Team Game', 
    date: '',
    image: 'https://source.unsplash.com/random',
    imageTitle: 'Image Text',
    description: 'desc'};

type MasterLayoutProps = {
    title : string
}

const MasterLayout : FC<MasterLayoutProps> = ({ title }) => <>
    <CssBaseline />
    <Container maxWidth="lg">
        <Header title={title} />
        <main>
            <Banner post={bannerData} />
            <Grid container spacing={4}>
                {featuredPosts.map((post, id) => <FeaturedPost key={id} post={post} />)}
            </Grid>
        </main>
    </Container>
</>

export default MasterLayout;