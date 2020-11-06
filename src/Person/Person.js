import React from 'react';
//import './Person.css';
import styled from 'styled-components';
//import Radium from 'radium';

const StyleDiv = styled.div`
    width: 60%;
    margin: auto;
    border:1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;

    @media(max-width:500px){
    width:450px;
    }`

const person = (props) => {
//return <p>I am Dipen and i am {Math.floor(Math.random() * 30)} Year old...</p>

// const style ={
//     '@media(min-width:500px)':{
//         width:'450px'
//     }
// };
return (
        //<div className='Person' style={style}>
        <StyleDiv>
        <p onClick={props.click}>I am {props.name} and i am {props.age} Year old...</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            </StyleDiv>
    )
};

export default person;