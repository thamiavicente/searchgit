import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-family: sans-serif;
    color: #666;
    font-size: 2rem;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    background-color: #333;
    color: #e3e3e3;
    padding: .5rem;
`;

export const LinkToHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: transparent;
    padding: .5rem 0;
    color: #000;
    border: 2px solid #333;
    font-weight: bold;
    text-decoration: none;

    &:active,
    &:focus {
        border-radius: 0;
        background-color: #333;
        color: #fff;
    }
`
