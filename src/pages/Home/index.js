import React, { useState, render } from 'react'; 
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  const history = useHistory();
  const [ user, setUser ] = useState('');
  const [ erro, setErro ] = useState(false);
  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');  
    })
    .catch(err => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
        <S.Content>
          <S.Title>Repositories by: &nbsp; </S.Title>
          <S.Input className="userInput" placeholder="user" value={user} onChange={e => setUser(e.target.value)} />
          <S.Button type="button" onClick={handleSearch} >search</S.Button>
        </S.Content>
       { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}