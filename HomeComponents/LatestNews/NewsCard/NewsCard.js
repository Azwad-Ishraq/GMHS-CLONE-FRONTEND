import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../../../styles/NewsCard.module.css'


const NewsCard = ({news}) => {
    const {title,img} = news;
    return (
        <Card data-aos="fade-up" sx={{ borderRadius: 3 }} className={styles.newsCard} style={{width:'300px',overflow:'visible'}} sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="194"
          image={img}
          
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        
        
      </Card>
    );
};

export default NewsCard;