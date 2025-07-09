import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('posts/')
      .then(res => setPosts(res.data))
      .catch(err => {
        console.error('게시글 불러오기 실패:', err);
        alert('로그인이 필요한 기능일 수 있어요.');
      });
    }, 
  );

  return (
    <div>
      <h2> 게시글 목록</h2>

    <button onClick={() => navigate('/posts/create')}>
       글 작성하기
    </button>

      <ul>
      
        {posts.map(post => (
        <div
            key={post.id}
            onClick={() => navigate(`/posts/${post.id}`)}
            style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
        >
            <strong>제목 : {post.title}</strong>
            <p>작성자 : {post.author_username}</p>
        </div>
                        )
                )
        }
      </ul>
    </div>
  );
}
