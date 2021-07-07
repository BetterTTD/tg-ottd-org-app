import { FC } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import FeaturedPost from '../featured-post/FeaturedPost';
import Main from '../main/Main';
import Posts from '../posts/Posts';

export type Post = {
    title : string,
    date : string,
    description : string,
    image?: string,
    imageTitle?: string
}

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
}));
  
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
    title: 'TG OpenTTD', 
    image: 'https://source.unsplash.com/random',
    imageTitle: 'Image Text',
    description: 'desc'
};

type MasterLayoutProps = {
    title : string
}

const MasterLayout : FC<MasterLayoutProps> = ({ title }) => {
    const classes = useStyles();
    return (<>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header />
            <main>
                <Banner {...bannerData} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post, id) => <FeaturedPost key={id} post={post} />)}
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                <Main title="Blog" posts={Posts} />
            </Grid>
            </main>
        </Container>
    </>);
};

export default MasterLayout;