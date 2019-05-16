import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
    primary: {
        lightest: '#EFF8FF',
        lighter: '#BCDEFA',
        light: '#6CB2EB',
        base: '#3490DC',
        dark: '#2779BD',
        darker: '#1C3D5A',
        darkest: '#12283A',
    },
    neutral: {
        white: '#FFFFFF',
        lightest: '#F8FAFC',
        lighter: '#F1F5F8',
        light: '#DAE1E7',
        base: '#B8C2CC',
        dark: '#8795A1',
        darker: '#606F7B',
        darkest: '#3D4852',
        black: '#22292F',
    },
    accents: {
        red: {
            lightest: '#FCEBEA',
            lighter: '#F9ACAA',
            light: '#EF5753',
            base: '#E3342F',
            dark: '#CC1F1A',
            darker: '#621B18',
            darkest: '#3B0D0C',
        },
        green: {
            lightest: '#E3FCEC',
            lighter: '#A2F5BF',
            light: '#51D88A',
            base: '#38C172',
            dark: '#1F9D55',
            darker: '#1A4731',
            darkest: '#0F2F21',
        },
        yellow: {
            lightest: '#FCFBEB',
            lighter: '#FFF9C2',
            light: '#FFF382',
            base: '#FFED4A',
            dark: '#F2D024',
            darker: '#684F1D',
            darkest: '#453411',
        },
    },
};
const StyledPage = styled.div`
    background: ${props => props.theme.neutral.white};
    color: ${props => props.theme.neutral.black};
`;
const InnerPage = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
`;

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnika_next-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        font-size: 10px;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        line-height: 2;
        font-family: 'radnika_next';
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.neutral.black};
    }
`;

export function Page(props) {
    return (
        <ThemeProvider theme={theme}>
            <StyledPage>
                <Meta />
                <Header />
                <InnerPage>{props.children}</InnerPage>
            </StyledPage>
        </ThemeProvider>
    );
}
