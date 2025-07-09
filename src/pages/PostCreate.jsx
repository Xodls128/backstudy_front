import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function PostCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem('access');  //JWT토큰 가져오기
    
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      await axios.post(
        'posts/create/', 
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 헤더 설정
          },
        }
      );
      alert('작성 완료!');
      navigate('/posts');
    } catch (err) {
      alert('작성 실패: 로그인 상태를 확인하거나 필드를 모두 입력했는지 확인하세요.');
    }
  };

  return (
    <div>
      <h2>새 글 작성</h2>
      <input
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={6}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>작성하기</button>
    </div>
  );
}
