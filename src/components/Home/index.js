// import { useEffect, useState } from 'react';
import BlogList from '../Bloglist';
import useFetch from '../custom-hook/useFetch'


const Home = () => {

    // const [blogs,setBlogs] = useState([
    //     {
    //         title : "Full Stack Dev Roadmap" , body : "Lorem impsum ...." , author : "Sarim" , id : 1
    //     },
    //     {
    //         title : "Data Science Roadmap" , body : "Lorem impsum ...." , author : "Haris" , id : 2
    //     },
    //     {
    //         title : "Cloud Computing Roadmap" , body : "Lorem impsum ...." , author : "Sarim" , id : 3
    //     }
    // ]);

    // const [blogs, setBlogs] = useState(null);
    // const [Isloading, setIsloading] = useState(true);
    // const [error, setError] = useState(null);

    // const handleDelete =  (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);

    // }

    // useEffect(() => {

    //     console.log("Use effect run");

    //     fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             if(!res.ok){
    //                throw Error("Could not fetch the data for that resource") 
    //             }
    //             console.log(res);
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setBlogs(data);
    //             setIsloading(false);

    //         })
    //         .catch(err =>{
    //             setError(err.message);
    //             setIsloading(false)
    //         //    console.log(err.message);
    //         })
    // }, []); //empty dependency 

    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div className="container">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>

    );
}

export default Home;


// http://localhost:8000/blogs



 // useEffect(()=>{
    //     console.log("Use effect run");
    //     console.log(blogs);
    // },[blogs]); // if blog changes than run

    // {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    //          <BlogList blogs={blogs.filter((blog) =>(blog.author === "Sarim"))} title="Sarim Blogs!"/> */}