import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: '0 auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'left',  
    fontSize: 14,
  },
  author: {
      textAlign: 'left'
  },
  body: {
    textAlign: 'left'
  },
  pos: {
    marginBottom: 12,
  },
});

const Blog = ({contents}) => {
  const classes = useStyles();
  const history = useHistory();
  const handleReadMore = () => {
    const blogTitle = contents.title.split(' ').join('_');  
    history.push({
        pathname: `/blogs/${blogTitle}`,
        state: {contents} 
    })
  }
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {contents.title}
        </Typography>
        <Typography className={classes.author} variant="h5" component="h2">
          {contents.author}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
          {contents.body.split('\n')[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleReadMore} >Read more</Button>
      </CardActions>
    </Card>
  );
}

export default Blog;
