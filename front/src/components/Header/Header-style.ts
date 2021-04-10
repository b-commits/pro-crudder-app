import { css } from '@emotion/react';

export const navList = css({
    listStyleType: 'none'
});

export const link = css({
    textDecoration: 'none',
});

const buttonBase = {
    cursor: 'pointer',
};

export const headerButtonSelected = css({
    ...buttonBase,
    textDecoration: 'underline',
});

export const headerButton = css(buttonBase);