import React from "react";
import styled from "styled-components";
const Nav= () => {
    return(
        <NavWrapper>
            <Logo>
                <img src="/images/logo.svg" alt = "disney Plus Logo"/>

            </Logo>
        </NavWrapper>
    )
}

export default Nav

const NavWrapper = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height: 70px;
background-color:#040714;
display:flex;
justify-content:space-between;
align-items: center;
padding: 0 30px;
letter-spacing: 16px;
z-index: 3; 
` 
const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 0;
max-height: 70px;
font-size: 0;
display: inline-block;

img{
    display: block;
    width:100%;
}

`

