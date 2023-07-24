'use client';

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { styled } from '@linaria/react';

interface NavProps {}

const StyledNav = styled.nav`
  ul {
    background: var(--secondary-color);
    font-family: var(--default-font);
    justify-content: center;
  }
`;

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Classes',
    key: 'classes',
  },
  {
    label: 'Teachers',
    key: 'teachers',
  },
  {
    label: 'Events',
    key: 'events',
  },
  {
    label: 'Gallery',
    key: 'gallery',
  },
  {
    label: 'About us',
    key: 'about',
  },
  {
    label: 'Volunteer',
    key: 'volunteer',
  },
  {
    label: 'Donate',
    key: 'donate',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
  {
    label: 'Lease',
    key: 'lease',
  },
];
const Navbar: React.FC<NavProps> = ({}) => {
  const [activeMenu, setActiveMenu] = useState('home');

  const onClick: MenuProps['onClick'] = () => {
    console.log('menu item clicked');
  };
  return (
    <StyledNav>
      <Menu
        onClick={onClick}
        selectedKeys={[activeMenu]}
        mode="horizontal"
        items={items}
      />
    </StyledNav>
  );
};

export default Navbar;
