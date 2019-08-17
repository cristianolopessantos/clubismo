import React, {useEffect, useState}from 'react'
import logo from '../assets/logo.png'
import './Main.css';
import {apifootball} from '../services/api'

export default function Main({match}){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadTeams(){
            const response = await apifootball.get('v2/teams/league/6',{
                headers:{
                    
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': '38d9332562msh098fafb58471983p1cd938jsn275ed1a70b20'
                }
            });
            // setUsers(re)
            setUsers(response.data.api.teams)
            
        }
      loadTeams();
    }, [match.params.username]);
   return(
       <div className="main-container">
           <img src={logo} alt="logo"></img>
           <h2>Bem vindo, {match.params.username}</h2>
           <h1>Liga: Campeonato Brasileiro</h1>
           <ul>
           {users.map(itens => (
          
                <li key={itens.team_id}>
                <img src={itens.logo} alt="time"></img>
                <footer>
                    <strong>{itens.name}</strong>
                </footer>
                </li>
           ))}
            </ul>
       </div>
   )
}

