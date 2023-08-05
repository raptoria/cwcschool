'use client';
import React, { useEffect, useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { styled } from '@linaria/react';
import { useRouter } from 'next/navigation';
import { MenuInfo } from 'rc-menu/lib/interface';
import { ConfigProvider } from 'antd';
import ReactGA from 'react-ga4';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { usePathname } from 'next/navigation';

interface NavProps {
  links: Array<MenuItemType>;
}

const StyledNav = styled.nav`
  ul {
    font-family: var(--default-font);
    justify-content: center;
    font-size: 1rem;
  }
`;

const G4tag = process.env.NEXT_PUBLIC_G4TAG;

const Navbar: React.FC<NavProps> = ({ links }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    ReactGA.initialize(G4tag as string);
  }, [G4tag]);

  useEffect(() => {
    const path = pathname === '/' ? 'home' : pathname.replace('/', '');
    setActiveMenu(path);
  }, [router]);

  const getLinks = useMemo(() => {
    const menuItems = [
      {
        label: 'Home',
        key: 'home',
      },
      ...links,
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
          selectedKeys={[activeMenu]}
          mode="horizontal"
          items={getLinks}
        />
      </ConfigProvider>
    </StyledNav>
  );
};

export default Navbar;
