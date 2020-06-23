import React, { useEffect } from "react";
import Step3Plan from "./Step3Plan";
import Step3Info from "./Step3Info";
import styled from "styled-components";
import Step3Conditions from "./Step3Conditions";
import TitleBlock from "./TitleBlock";
import ReactGA from "react-ga";
import RadiusContentWrapper from "./RadiusContentWrapper";
import { connect } from "react-redux";
const WrapperStep3 = styled.div `
  width: 100%;
  max-width: 660px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Step3 = (props) => {
    const formData = props;
    const setFormData = (payload) => {
        return props.dispatch({
            type: 'FormContent/setFormData',
            payload
        });
    };
    const setValidationData = (payload) => {
        return props.dispatch({
            type: "ValidationContent/setValidationData",
            payload
        });
    };
    useEffect(() => {
        setFormData(Object.assign(Object.assign({}, formData), { successFlow: false }));
        window.scrollTo(0, 0);
        ReactGA.pageview(window.location.pathname + `/?plan=${formData.selectedPlan}`);
    }, []);
    return (React.createElement(RadiusContentWrapper, null,
        React.createElement(TitleBlock, { titulo: "Resumen de tu solicitud" }),
        React.createElement(WrapperStep3, null,
            React.createElement(Step3Plan, Object.assign({}, props, { setFormData: setFormData, setValidationData: setValidationData })),
            React.createElement(Step3Info, Object.assign({}, props, { setFormData: setFormData, setValidationData: setValidationData }))),
        React.createElement(Step3Conditions, Object.assign({}, props, { setFormData: setFormData, setValidationData: setValidationData }))));
};
export default connect(({ FormContent, ValidationContent }) => (Object.assign(Object.assign({}, FormContent), ValidationContent)))(Step3);
//# sourceMappingURL=Step3.js.map