import { Link } from "gatsby";
import React from "react";
const Header = ({ siteTitle }) => (React.createElement("header", { style: {
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
    } },
    React.createElement("div", { style: {
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
        } },
        React.createElement("h1", { style: { margin: 0 } },
            React.createElement(Link, { to: "/", style: {
                    color: `white`,
                    textDecoration: `none`,
                } }, siteTitle)))));
Header.defaultProps = {
    siteTitle: ``,
};
export default Header;
//# sourceMappingURL=header.js.map