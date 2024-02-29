import { styled } from '@linaria/react';

export interface PostContent {
  [key: string]: string;
}

export interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const StyledContent = styled.main`
  display: grid;
  grid-auto-columns: 50rem;
  justify-content: center;
  margin: var(--space-md);

  img {
    height: auto;
    width: auto;
  }

  @media all and (max-width: 768px) {
    grid-auto-columns: auto;
    img {
      width: 70%;
    }
  }
`;

export interface LinkItem {
  key: string;
  slug?: string;
  title: string;
}
