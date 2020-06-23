import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
const NotFoundPage = () => {
    return React.createElement(Layout, null,
        React.createElement(SEO, { title: "404: Not found" }),
        React.createElement("h1", null, "NOT FOUND"),
        React.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};
export default NotFoundPage;
//# sourceMappingURL=404.js.map