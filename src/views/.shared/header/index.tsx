import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton";

const Header = () => {
    return(
        <Container>
            <Logo to={'/'}>Blog</Logo>
            <Nav>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/write'}>Write</NavItem>
                <LoginButton/>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  box-shadow:  1px 1px 3px #ddd;
`;
const Logo = styled(Link)`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
`;
const Nav = styled.div`
  
`;
const NavItem = styled(Link)`
  padding: 10px;
  margin: 0 10px;
`;
export default Header;
