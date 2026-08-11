import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then(res => setPost(res.data));
  }, [id]);
  
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => navigate('/'));
  };
  
  if (!post) return <p>Loading...</p>;
  
  return (
    <div style={{padding: '20px'}}>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      <Link to={`/edit/${post._id}`}>Edit</Link> | 
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}