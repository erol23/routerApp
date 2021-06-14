import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

const Details = (props) => {
  const [post, setPost] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h2>Details {props.match.params.id}</h2>
      <p>{post?.id}</p>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
      <button onClick = {() => history.push("/routerApp")}>Go Home</button>
    </div>
  );
};

export default Details;
