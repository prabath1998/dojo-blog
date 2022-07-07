import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div>
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p> <br />
                        <div>{blog.body}</div>
                    </article>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;