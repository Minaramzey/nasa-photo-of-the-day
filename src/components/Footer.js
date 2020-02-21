import React from 'react'
import styled from 'styled-components'

const BottomBanner = styled.div`
    width: 100%;
    background-color: #0B3D91;;
    height: 50px;
`;

const Date = styled.p`
    color: black;
    font-weight: bold; 
`;

const Footer = ({date}) => {
    return (
        <div className="footer">
            <BottomBanner>
            <Date className="date">{date}</Date>
            </BottomBanner>
        </div>
    )
}

export default Footer 