import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    console.log('입력값:', username, password); 
    try {
      await axios.post('users/signup/', { username, password });
      alert('회원가입 성공! 로그인해주세요.');
      navigate('/');
    } catch (err) {
      alert('회원가입 실패: 아이디가 중복되었거나 형식이 맞지 않습니다.');
    }
  };

  return (
    <div>
      <h2>📝 회원가입</h2>
      <input
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}
