/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import Header from "./header";
import "./layout.css";
const Layout = ({ children }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { siteTitle: "data.site.siteMetadata.title" }),
        React.createElement("div", { style: {
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
            } },
            React.createElement("main", null, children),
            React.createElement("footer", null,
                "\u00A9 ",
                new Date().getFullYear(),
                ", Built with",
                ` `,
                React.createElement("a", { href: "https://www.gatsbyjs.org" }, "Gatsby")))));
};
export default Layout;
//# sourceMappingURL=layout.js.map