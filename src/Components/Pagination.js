import {useState, useEffect} from 'react'
import axios from "axios";
import Post from "./Post";
import Table from 'react-bootstrap/esm/Table';

const Pagination = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10); //to show how many posts 
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setTotalPosts(response.data.length);
      setLoading(false);
    };

    loadPost();
  }, []);
const indexOfLastPost = currentPage + postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (pageNum) => setCurrentPage(pageNum);

const prevPage = () => setCurrentPage(currentPage -1);
const nextPage = () => setCurrentPage(currentPage +1);

const showPagination = () => {
  return (
    <Post 
      postPerPage={postPerPage}
      totalPosts={totalPosts}
      currentPage={currentPage}
      paginate={paginate}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
};


  console.log("posts ===>", posts);

  return (
    <>
      <h2> Pagination </h2>
      <Table className="list-group mb-4">
        {!loading ? currentPosts.map(post => (
          <li key={post.id} className="list-group-item">
          
           
          
          {post.body} 
           
          </li>
        )): "Loading..."}
      </Table>

      <div>{showPagination}</div>
    </>
  )


}

export default Pagination;