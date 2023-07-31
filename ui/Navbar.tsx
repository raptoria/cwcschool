'use client';
import React, { useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { styled } from '@linaria/react';
import { useRouter } from 'next/navigation';

interface NavProps {
  links: Array<string>;
}

const StyledNav = styled.nav`
  ul {
    background: var(--tertiary-color);
    font-family: var(--default-font);
    justify-content: center;
    font-size: 1rem;
  }
`;

const Navbar: React.FC<NavProps> = ({ links }) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('home');

  const getLinks = useMemo(() => {
    const readableLinks = links.map((link) => {
      const linkRoute = link.replace(/^[^\-]+-(?<title>.+)\.md$/, '$<title>');
      return {
        label: linkRoute.charAt(0).toUpperCase() + linkRoute.slice(1),
        key: linkRoute,
      };
    });

    const menuItems: MenuProps['items'] = [
      {
        label: 'Home',
        key: 'home',
      },
      ...readableLinks,
    ];
    return menuItems;
  }, [links]);

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
        items={getLinks}
      />
    </StyledNav>
  );
};

export default Navbar;
