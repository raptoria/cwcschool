import { styled } from '@linaria/react';

interface HeaderProps {}

const StyledHeader = styled.header`
  background: url(/assets/images/headerbg.png) no-repeat scroll top;
  display: grid;
  padding: var(--space-md);
  justify-content: center;

  h1 {
    margin-bottom: 0;
    font-size: 3rem;
  }

  h3 {
    font-style: italic;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: var(--neutral-color);
  }
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <h1>
        <a href="/" title="Clearwater Chinese School">
          Clearwater Chinese School
        </a>
      </h1>
      <h3>
        4600 78th Ave., N., Pinellas Park, Florida, 33781 ~ (727) 544-5748
      </h3>
    </StyledHeader>
  );
};

export default Header;
