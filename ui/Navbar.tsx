'use client';
import { useEffect, useMemo, useState } from 'react';
import ReactGA from 'react-ga4';
import { useSelectedLayoutSegment } from 'next/navigation';
import { NavMenu } from './NavMenu';
import { LinkItem } from '@/lib/shared';

interface NavProps {
  links: Array<LinkItem>;
}

const G4tag = process.env.NEXT_PUBLIC_G4TAG;

const Navbar: React.FC<NavProps> = ({ links }) => {
  const activeRoute = useSelectedLayoutSegment();

  useEffect(() => {
    ReactGA.initialize(G4tag as string);
  }, [G4tag]);

  const getLinks = useMemo(() => {
    const menuItems: LinkItem[] = [
      {
        label: 'Home',
        key: '',
      },
      ...links,
    ];
    return menuItems;
  }, [links]);

  return <NavMenu navLinks={getLinks} activeLink={activeRoute || ''} />;
};

export default Navbar;
