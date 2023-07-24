import { css } from '@linaria/core';

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    @font-face {
      font-family: 'MaterialIcons';
      src: url(../assets/fonts/MaterialIcons.ttf) format('truetype');
    }
  }
`;
