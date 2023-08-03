import { styled } from '@linaria/react';
import moment from 'moment';
import Image from 'next/image';

export interface IFooter {
  name: string;
  address: string;
  phone: string;
  blurb: string;
  content: string;
}

const StyledFooter = styled.footer`
  display: grid;
  justify-items: center;
  grid-gap: var(--space-lg);
  font-size: 1.1rem;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  padding: var(--space-lg);
  background: var(--tertiary-color);
  color: var(--neutral-color);
  font-size: 1rem;

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
    margin: var(--space-sm);
  }

  .address {
    color: var(--primary-color);
  }

  .phone {
    color: var(--secondary-color);
    font-style: italic;
  }

  .blurb {
    color: var(--accent-color);
  }

  .links {
    width: 100%;
  }

  @media all and (max-width: 768px) {
    grid-template-columns: 20rem;
    justify-content: center;
    grid-gap: var(--space-md);

    ul li {
      margin:  var(--space-x-sm) 0;
    }


  @media only screen and (max-width: 1200px) {
    padding: var(--space-lg);
  }
`;

const Footer: React.FC<IFooter> = ({
  name,
  address,
  phone,
  blurb,
  content,
}) => {
  return (
    <StyledFooter>
      <div>
        <Image
          src="/assets/images/logo.png"
          alt="Clearwater Chinese School"
          width={200}
          height={117}
        />
        <div className="address">{address}</div>
        <div className="phone">Phone: {phone}</div>
      </div>
      <div className="blurb">
        <p>{blurb}</p>

        <span className="disclaimer">
          © {moment().year()} {name}
        </span>
      </div>

      {content && (
        <div className="links" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </StyledFooter>
  );
};

export default Footer;
