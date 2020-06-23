// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
const SecondPage = (props) => {
    const [test, setTest] = useState(false);
    useEffect(() => {
        console.log(props);
        setTimeout(() => {
            setTest(true);
        }, 5000);
    }, []);
    return React.createElement(Layout, null,
        React.createElement(SEO, { title: "Page two" }),
        React.createElement("h1", null, "Hi from the pdp "),
        React.createElement("p", null,
            "Welcome to pdp ",
            props.pageContext.currentPage),
        test ? React.createElement(Link, { to: "/app/login", style: { color: 'red' } }, "Go back to the homepage") : null,
        React.createElement(Link, { to: "/", style: { color: 'red' } }, "Go back to the homepage"));
};
export default SecondPage;
//# sourceMappingURL=pdp.js.map