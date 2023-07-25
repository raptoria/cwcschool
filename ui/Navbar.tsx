'use client';

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { styled } from '@linaria/react';
import { useRouter } from 'next/navigation';

interface NavProps {}

const StyledNav = styled.nav`
  ul {
    background: var(--tertiary-color);
    font-family: var(--default-font);
    justify-content: center;
    font-size: 1rem;
  }
`;

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Activities',
    key: 'activities',
  },
  {
    label: 'Our Teachers',
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
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    const currentMenu = e.key === 'home' ? '/' : `/${e.key}`;
    setActiveMenu(e.key);
    router.push(currentMenu);
  };
  return (
    <StyledNav>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['home']}
        selectedKeys={[activeMenu]}
        mode="horizontal"
        items={items}
      />
    </StyledNav>
  );
};

export default Navbar;
