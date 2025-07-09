import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PostList from './pages/PostList';
import PostCreate from './pages/PostCreate';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/create" element={<PostCreate />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
