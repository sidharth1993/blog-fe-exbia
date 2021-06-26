import React, { useEffect } from 'react';
import { getBlogs } from '../service/apis';
import Blog from '../components/Blog';
import TextField from '@material-ui/core/TextField';

let blogsList = [];
const BlogsPage = () => {
    const [blogs, setBlogs] = React.useState([]);
    useEffect(()=>{
        getBlogs().then((res)=>{
                blogsList = res;
                setBlogs(res);
            }
        );
    },[])

    const handlesearch = (e) => {
        const searchCriteria = e.target.value;
        const matchingBlogs = blogsList.filter((blog) => {
            return blog.title.toLowerCase().indexOf(searchCriteria.toLowerCase()) >= 0
        } );
        setBlogs(matchingBlogs);
    }
    
    return(
        <div className="blog-contents" >
            <div className="search-bar" >
                <TextField id="standard-basic" 
                        fullWidth
                        onChange={handlesearch}
                        label="Search Title" />
            </div>
            {
                blogs && blogs.length > 0 &&
                blogs.map((blog)=>{
                    return <div className="mar-t-20" key={blog.uid}><Blog contents={blog} /></div>
                })
            }
        </div>
    )
}

export default BlogsPage;