import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Step3 from "@/components/checkout/Step3";
import Step4 from "@/components/checkout/Step4";
import "./app.scss";
import PrivateRoute from "@/components/auth/privateRoute";
import Step1 from "@/components/checkout/Step1";
import Step2 from "@/components/checkout/Step2";
import HeaderScene from "@/components/checkout/HeaderScene";
import Header from "@/components/checkout/Header";
import FooterScene from "@/components/checkout/FooterScene";
import Footer from "@/components/checkout/Footer";
import InputSelect from "../gatsby-theme-core/components/InputSelect";
import InputSelect3 from "gatsby-theme-wom-magento/src/gatsby-theme-core/components/InputSelect";
const App = (props) => {
    useEffect(() => {
        window.basePath = props.pageContext.basePath;
    }, []);
    return React.createElement(React.Fragment, null,
        React.createElement(InputSelect, null),
        React.createElement(InputSelect3, null),
        React.createElement(HeaderScene, null),
        React.createElement(Header, null),
        React.createElement(Router, { basepath: props.pageContext.basePath + "/app", style: {
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column"
            } },
            React.createElement(PrivateRoute, { path: "/", component: Step1 }),
            React.createElement(PrivateRoute, { path: "/paso2", component: Step2 }),
            React.createElement(PrivateRoute, { path: "/paso3", component: Step3 }),
            React.createElement(PrivateRoute, { path: "/paso4", component: Step4 })),
        React.createElement(FooterScene, null),
        React.createElement(Footer, null));
};
// @ts-ignore
export default App;
//# sourceMappingURL=app.js.map
