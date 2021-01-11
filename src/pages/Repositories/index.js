import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    const history = useHistory();
    let langs = ["Ruby","ES6","Scala"];
    useEffect (() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return (
        <S.Container>
        <S.Title>Repositories</S.Title>
        <S.List>
            { repositories.map (repository => {
                return (
                    <S.ListItem>Repositório: { repository }</S.ListItem>
                )
            })}
        </S.List>
        <S.LinkToHome to="/">back</S.LinkToHome>
        <div>
        {langs.map(it => <p>{it}</p>)}
        </div>
        </S.Container>
    )
}