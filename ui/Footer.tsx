import { styled } from '@linaria/react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export interface IFooter {
  name: string;
  address: string;
  phone: string;
  facebook: string;
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

  @media all and (max-width: 768px) {
    grid-template-columns: 300px;
    justify-content: center;
    grid-gap: var(--space-md);
  }

  @media only screen and (max-width: 1200px) {
    padding: var(--space-lg);
  }
`;

const Footer: React.FC<IFooter> = ({
  name,
  address,
  phone,
  facebook,
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
        <div className="phone">{phone}</div>
      </div>
      <div>
        <p>{content}</p>

        <span className="disclaimer">
          © {moment().year()} {name}
        </span>
      </div>
      <div className="socialIcons">
        {facebook && (
          <a href={facebook} target="_blank" rel="noreferrer">
            Visit us on Facebook!
          </a>
        )}
      </div>
    </StyledFooter>
  );
};

export default Footer;
