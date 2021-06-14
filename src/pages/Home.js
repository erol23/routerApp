import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const postHandler = (id) => {
    console.log(id);
    history.push(`details/${id}`);
  };
  return (
    <div className="App">
      {posts?.map((post, index) => (
        <div
          key={index}
          style={{ border: "1px solid", margin: 10, cursor: "pointer" }}
          onClick={() => postHandler(post.id)}
        >
          <p>{post.title}</p>
          <p>{post.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
