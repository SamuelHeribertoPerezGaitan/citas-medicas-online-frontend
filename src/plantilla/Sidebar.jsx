import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/sidebar.css'

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #34495e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem 0;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer className='sidebar'>
      <SidebarLink to="/">Dashboard</SidebarLink>
      <SidebarLink to="/">Habilidades</SidebarLink>
      <SidebarLink to="/">Catalogos</SidebarLink>
      <SidebarLink to="/ListadoEmpleados">Empleados</SidebarLink>
      <SidebarLink to="/settings">Settings</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
