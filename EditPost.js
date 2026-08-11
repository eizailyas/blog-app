import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then(res => {
      setTitle(res.data.title);
      setSummary(res.data.summary);
    });
  }, [id]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Note: backend me PUT route nahi banaya, isliye delete karke new banayega
    axios.post('http://localhost:3001/posts', {title, summary}).then(() => navigate('/'));
  };
  
  return (
    <form onSubmit={handleSubmit} style={{padding: '20px'}}>
      <h1>Edit Post</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <br/><br/>
      <textarea value={summary} onChange={e => setSummary(e.target.value)} />
      <br/><br/>
      <button type="submit">Update</button>
    </form>
  );
}