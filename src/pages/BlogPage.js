import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      fontSize: 14,
    },
    body: {
      textAlign: 'left'
    },
    pos: {
      marginBottom: 12,
    },
  });

const BlogPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [bodyArr, setBodyArr] = React.useState([]);
    useEffect(() => {
        if (history.location.state.contents) {
            const arr = history.location.state.contents.body.split('\n');
            setBodyArr(arr);
        }
    },[history.location.state]);

    return(
        <div className="blog-contents">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {history.location.state.contents.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        by {history.location.state.contents.author}
                    </Typography>
                    <Typography className={classes.body} variant="body2" component="p">
                        {
                        bodyArr && bodyArr.length > 0 &&
                        bodyArr.map((body,index)=>{
                            return <p key={index}>{body}</p>
                        } )
                        }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default BlogPage;