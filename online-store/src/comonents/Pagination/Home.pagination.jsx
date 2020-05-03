import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Post";
import Pagination from "./Pagination";

const PaginationProduct = props => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      let response = await axios.get("http://localhost:4600/api/fetchproduct");
      console.log(response.data.d);
      setPost(response.data.d);
      console.log(response.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);
  //change page

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts allenquries={currentPost} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PaginationProduct;
