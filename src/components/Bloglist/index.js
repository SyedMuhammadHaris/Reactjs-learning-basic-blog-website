import { Link } from "react-router-dom"

const BlogList = ({ blogs, title }) => {

    //OR
    //const BlogList = ({blogs,title , handleDelete}) => {
    //const BlogList = (props) => {
    // const blogs = props.blog;
    // const title = props.title;
    // console.log(props , blogs);
    // console.log(blogs);


    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </Link>


                    {/* <button onClick={() => handleDelete(blog.id)} className="button">Delete</button> */}
                </div>

            ))}
        </div>
    );
}

export default BlogList;
