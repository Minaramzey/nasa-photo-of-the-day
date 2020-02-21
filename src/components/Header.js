import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    width: 100%;
    background-color: #0B3D91;
    height: 100px;
    color:white;
`;

const LinkBox = styled.nav`
 
    padding: 20px;
    display: flexs;
    justify-content: space-between;
    margin: 0 auto;
    color: white;
    
`;

const Links = styled.a`
display: flexs;
justify-content: space-between;
    color: black;
    border: solid black 3px;
    background-color: #FC3D21;
    text-decoration: underline;
    padding: 5px;
    margin: 0 auto;
    width: 3%;
    text-decoration: none;
    &:hover{
        background: white;
        text-decoration: none;
    }
`;

const Header = (props) => {
    return (
        <div className="header">
            <Banner>
            <LinkBox>
                <Links href="https://www.nasa.gov/">Home</Links>
                <Links href="https://www.nasa.gov/">More</Links>
                <Links href="https://www.nasa.gov/">Other</Links>
                <Links href="https://www.nasa.gov/">About</Links>
            </LinkBox>
            </Banner>
                <p>{props.title}</p>
        </div>
    )
}

export default Header 