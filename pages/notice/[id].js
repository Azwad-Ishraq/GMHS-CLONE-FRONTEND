import { Container, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SingleNotice = ({ notice }) => {
    return (
        <>

            <Link href='/'>
                <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"
                    sx={{ m: 3 }}

                >
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
            </Link>
            <Container>
                <Typography sx={{ mt: 5, mb: 5 }} color='secondary' variant='h3'>
                    {
                        notice.title
                    }
                </Typography>
                <Typography variant='h5'>
                    {
                        notice.des
                    }
                </Typography>
            </Container>
        </>
    );
};







export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost:5000/notices`)
    const notices = await res.json()


    // Get the paths we want to pre-render based on posts
    const paths = notices.map((notice) => ({
        params: { id: notice._id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

    const res = await fetch(`http://localhost:5000/notices/${params.id}`)
    const data = await res.json()

    return {
        props: { notice: data }
    }
}
export default SingleNotice;