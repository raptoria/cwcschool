import { styled } from '@linaria/react';

export interface IPostContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
  content: any;
  author: string;
  date: string;
}

export interface IPageContent {
  content: any;
}

export interface IMetadata {
  title: string;
  description: string;
  keywords: string;
}

export interface ISharedContent {
  title: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  content: string;
}

export interface LinkItem {
  key: string;
  slug?: string;
  title: string;
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
