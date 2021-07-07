import { useHistory, useParams } from "react-router-dom";
import useFetch from "../custom-hook/useFetch";

const BlogDetails = () => {

    const { id } = useParams(); //hook from react router doms
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory(); 

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method : 'DELETE'
        })
        .then(() => {
          history.push('/');
        })
    }
    return (
        <div className="blog-details">
       
            {isPending && <div className="container">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            }
             { error && <div>{error}</div>}
            { blog &&
              (
                  <article>
                      <h2>{blog.title}</h2>
                      <p>Written By {blog.author}</p>
                     <div>{blog.body}</div>
                     <button onClick={handleDelete}>Delete</button>
                  </article>
              )
            }
        </div>
    );
}

export default BlogDetails;