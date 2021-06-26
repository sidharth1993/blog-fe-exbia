import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { blogs } from '../service/data';

const useStyles = makeStyles((theme)=>({
    form: {
        '& > *': {
          margin: theme.spacing(1)
        },
      },
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
      textAlign: 'left'
    },
    author: {
        fontSize: 14,
        textAlign: 'left'
    },
    body: {
      textAlign: 'left'
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        alignContent: 'right'
    }
  }));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}  

let editorData = "<p>Write Away!</p>";
let titleData = '';
let authorData = '';

const PostPage = () => {
    const classes = useStyles();

    const handlePost = () => {
        if (titleData && authorData && editorData) {
            const newUid = Number(blogs[blogs.length - 1].uid) + 1;
            blogs.push({
                uid: String(newUid),
                title: titleData,
                author: authorData,
                body: editorData
            })
            setSuccess(true);
        } else {
            setFailure(true);
        }     
    }

    const [success, setSuccess] = React.useState(false);
    const [failure, setFailure] = React.useState(false);

    return(
        <div className="blog-contents">
            <Card className={classes.root} variant="outlined">
            <Snackbar open={success} autoHideDuration={6000} onClose={() => {setSuccess(false)}}>
                <Alert onClose={() => setSuccess(false)} severity="success">
                    Blog successfully posted
                </Alert>
            </Snackbar>
            <Snackbar open={failure} autoHideDuration={6000} onClose={() => {setFailure(false)}}>
                <Alert onClose={() => setFailure(false)} severity="error">
                    Details missing
                </Alert>
            </Snackbar>
                <CardContent>
                <form className={classes.form} noValidate autoComplete="off">
                    <div>
                    <TextField className={classes.body} id="standard-basic" 
                        fullWidth
                        onChange={
                            (e) => {
                                titleData = e.target.value
                            }
                        }
                        label={
                            <Typography className={classes.title} variant="h5" component="h2">
                                Enter Title
                            </Typography>
                        } />
                    </div>
                    <div>
                    <TextField id="standard-basic" 
                        fullWidth
                        onChange={
                                    (e) => {
                                                authorData = e.target.value
                                            }
                                }
                        label={
                            <Typography className={classes.title} variant="h5" component="h2">
                                Author's Name
                            </Typography>
                        } />
                    </div>
                    <div className="mar-t-20">                
                       <Typography className={classes.body} variant="body2" component="div">
                            <CKEditor
                                editor={ ClassicEditor }
                                data={editorData}
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    editorData = data;
                                } }
                            />
                       </Typography>
                    </div>
                </form>
                </CardContent>
                <CardActions>
                    <Button className={classes.button} size="small" onClick={handlePost} >Post</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PostPage;