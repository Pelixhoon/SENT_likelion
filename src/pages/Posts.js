import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Post를 post하는 함수
  const postPost = async () => {
    const response = await axios
      .post("http://127.0.0.1:8000/posts/", {
        title: "프런트엔드 공부",
        body: "리액트!",
        category: "개발",
      })
      .then(function (response) {
        console.log("등록 결과", response);
      })
      .catch(function (error) {
        console.log("등록 에러", error);
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/posts/");
        console.log("response", response.data);
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {posts &&
        posts.map((post) => (
          <div key={post.pk}>
            <h1>{post.title}</h1>
            <p>{post.published_date}</p>
          </div>
        ))}
      <button onClick={postPost}>임의로 post 버튼</button>
    </>
  );
};

export default Posts;
