import React, {useState} from 'react';
import './Login.css';

import logo from '../assets/logo.svg';
import {api} from '../services/api';

export default function Login({history}) {
  const [username, setUsername] = useState('');
  const [pass, setUserpass] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/cadastrar',{
      username,
      password: pass
    })
    console.log(response)
    history.push(`/main/${username}`);
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário no GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
         <input
         type="password"
          placeholder="Digite seu usuário no GitHub"
          value={pass}
          onChange={e => setUserpass(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
