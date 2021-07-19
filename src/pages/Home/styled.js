import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    text-align: center;
    color: #dcdcdc;
`

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid #333;
    padding: 0 .5rem;
    height: 2rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 2px solid #333;
    background-color: transparent;
    font-weight: bold;
    padding: .5rem 1rem;
    margin-left: .5rem;
    border-radius: 0;

    &:active,
    &:focus {
        border-radius: 0;
        background-color: #333;
        color: #fff;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.7rem;
    color: coral;
    font-weigth: bold;
    margin-top: 1rem;
`