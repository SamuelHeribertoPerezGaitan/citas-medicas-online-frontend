import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  margin:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <div style={{position:"fixed", width: "100%"}}>
      <HeaderContainer>
      <Logo ><span style={{color:"#37C747", padding:"5px"}}>Admin </span> Citas Medicas Online</Logo>
      <div>Logout</div>
    </HeaderContainer>
    </div>
    
  );
};

export default Header;
