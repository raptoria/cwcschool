'use client';
import React, { useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { styled } from '@linaria/react';
import { useRouter } from 'next/navigation';
import { MenuInfo } from 'rc-menu/lib/interface';
import { ConfigProvider } from 'antd';

interface NavProps {
  links: Array<string>;
}

const StyledNav = styled.nav`
  ul {
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

  const onClick: MenuProps['onClick'] = (e: MenuInfo) => {
    const currentMenu = e.key === 'home' ? '/' : `/${e.key}`;
    setActiveMenu(e.key);
    router.push(currentMenu);
  };

  return (
    <StyledNav>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorPrimary: '#ed0e05', //antd doesn't support css variables yet
              itemBg: '#f7f5e7',
            },
          },
        }}
      >
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['home']}
          selectedKeys={[activeMenu]}
          mode="horizontal"
          items={getLinks}
        />
      </ConfigProvider>
    </StyledNav>
  );
};

export default Navbar;
