import React from 'react';
import { styled } from '@linaria/react';
import { MenuItem } from './Navbar';

interface NavMenuProps {
  navLinks: Array<MenuItem>;
  activeLink: string | undefined;
}

const MenuContainer = styled.div<Partial<NavMenuProps>>`
  nav {
    display: grid;
    justify-content: center;
    background: var(--tertiary-color);
    font-family: var(--default-font);
    font-size: 1rem;
  }

  ul {
    padding: 0;
  }

  ul li {
    display: inline;
    margin: var(--space-sm);
    position: relative;

    a {
      color: var(--neutral-color);

      :hover {
        text-decoration: none;
        color: var(--primary-color);
      }

      &.active:after {
        position: absolute;
        inset-inline: 0;
        bottom: calc(var(--space-sm) * -1);
        border-bottom: 2px solid;
        border-color: var(--primary-color);
        transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        content: '';
      }

      &.active {
        color: var(--primary-color);
      }
    }
  }

  @media all and (max-width: 768px) {
    ul {
      margin: 0;
    }
    ul li {
      display: block;
      font-size: 1.2rem;

      .active:after {
        border: none;
      }
    }
  }

  @media only screen and (max-width: 960px) {
    ul li {
      margin: var(--space-x-sm);
    }
  }
`;

export const NavMenu: React.FC<NavMenuProps> = ({ navLinks, activeLink }) => {
  return (
    <MenuContainer>
      <nav>
        <ul>
          {navLinks &&
            navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={`/${link.key}`}
                  className={link.key === activeLink ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </MenuContainer>
  );
};
