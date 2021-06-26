import { blogs } from "./data"

const getBlogs = () => {
    return new Promise((resolve,reject) => {
        resolve(blogs);
    });
}    

export {
    getBlogs
}