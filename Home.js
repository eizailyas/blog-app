import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then(res => setPosts(res.data));
  }, []);
  return (
    <div style={{padding: '20px'}}>
      <h1>All Posts</h1>
      {posts.map(p => (
        <div key={p._id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <Link to={`/post/${p._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}