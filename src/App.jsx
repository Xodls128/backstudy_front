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
        <Route path="/create" element={<PostCreate />} />
        {/* 추후 PostList, PostCreate 경로도 여기에 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
