import { styled } from '@linaria/react';
import moment from 'moment';
import Image from 'next/image';

export interface IFooter {
  title: string;
  address: string;
  phone: string;
  description: string;
  content: string;
  email: string;
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

  .phone, .email {
    color: var(--secondary-color);
    font-style: italic;
  }

  .blurb {
    color: var(--accent-color);
  }


  @media all and (max-width: 768px) {
    grid-template-columns: 20rem;
    justify-content: center;
    grid-gap: var(--space-md);
    padding: var(--space-md) 0;

    .links {
      justify-self: flex-start;
    }

    .about, .blurb, .links {
      margin: 0 var(--space-md);
    }

    ul li {
      margin:  var(--space-x-sm) 0;
    }

`;

const Footer: React.FC<IFooter> = ({
  title,
  address,
  phone,
  description,
  content,
  email,
}) => {
  return (
    <StyledFooter>
      <div className="about">
        <Image
          src="/assets/images/logo.png"
          alt="Clearwater Chinese School"
          width={200}
          height={117}
        />
        <div className="address">{address}</div>
        <div className="phone">Phone: {phone}</div>
        <div className="email">
          E-mail: <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="blurb">
        <p>{description}</p>

        <span className="disclaimer">
          © {moment().year()} {title}
        </span>
      </div>

      {content && (
        <div className="links" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </StyledFooter>
  );
};

export default Footer;
