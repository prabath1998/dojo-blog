
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {data: blogs ,isPending, error} = useFetch("http://localhost:8000/blogs");

  

  return (
    <div className="home">
      { error && <div style={{color:"red"}}>{error}</div>} <br />
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};



export default Home;
