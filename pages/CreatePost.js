import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/posts', {title, summary})
    .then(() => navigate('/'));
  };
  
  return (
    <form onSubmit={handleSubmit} style={{padding: '20px'}}>
      <h1>Create Post</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <br/><br/>
      <textarea placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} />
      <br/><br/>
      <button type="submit">Submit</button>
    </form>
  );
}