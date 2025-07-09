import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function PostDetail() {
  const { id } = useParams(); // URL 파라미터에서 post id 가져옴
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`posts/${id}/`);
        setPost(res.data);
      } catch (err) {
        alert('글을 불러오는 데 실패했습니다.');
        navigate('/posts');
      }
    };
    fetchPost();
  }, [id, navigate]);

  if (!post) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>제목 : {post.title}</h2>
      <p>내용 : {post.content}</p>
      <p>작성자 : {post.author_username}</p>
    </div>
  );
}
