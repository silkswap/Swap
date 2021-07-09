import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }

  [title=Bunny] {
    display: none !important;
  }
  [role=presentation] {
    // background-color: rgba(0,255,0,.03);
    background-color: rgba(0,0,0,.6);
  }
  svg.mobile-icon {
    display: none !important;
  }
  .navbar-btn {
    border-radius: 4px !important;
    background: transparent !important;
    border: 1px solid #008D3E !important;
  }
`

export default GlobalStyle
