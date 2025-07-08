import { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('posts/')
      .then(res => setPosts(res.data))
      .catch(err => {
        console.error('게시글 불러오기 실패:', err);
        alert('로그인이 필요한 기능일 수 있어요.');
      });
  }, []);

  return (
    <div>
      <h2>📄 게시글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> — 작성자: {post.author_username}
          </li>
        ))}
      </ul>
    </div>
  );
}
