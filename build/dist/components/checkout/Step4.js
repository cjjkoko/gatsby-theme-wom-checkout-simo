import React, { useEffect } from "react";
import Step3Plan from "./Step3Plan";
import FrequentQuestions from "./FrequentQuestions";
import styled from "styled-components";
import IconEmail from "@/images/formulario/icon_email.svg";
import IconLight from "@/images/icon_light_bulb.svg";
import ReactGA from "react-ga";
import RadiusContentWrapper from "./RadiusContentWrapper";
import { connect } from "react-redux";
const FinalSummary = styled.div ` 
  .summary-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px dashed #d4c6c6;
    padding-bottom: 20px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .summary-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      color: #381451;
      @media (max-width: 480px) {
        margin-bottom: 10px;
        color: #76489b;
      }
    }
    .summary-number {
      font-size: 16px;
      line-height: 20px;
      color: #7c6c8a;
      span {
        color: #381451;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
  .summary-body {
    width: 100%;
    max-width: 690px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }
    .summary-step {
      a {
        text-decoration: none;
      }
      width: 60%;
      margin-top: 30px;
      @media (max-width: 640px) {
        width: 100%;
        max-width: 280px;
      }
      h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #381451;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
        color: #381451;
        margin-bottom: 20px;
        text-align: justify;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      button {
        width: 100%;
        max-width: 300px;
        display: block;
        margin: 40px auto 0;
        background-color: #e92070;
        border-radius: 8px;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        padding: 14px 20px;
        border: none;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        &:hover {
          background-color: #8e1344;
        }
      }
    }
  }
  .summary-alert {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    img {
      margin-right: 10px;
      @media (max-width: 480px) {
        margin: 0 auto 10px;
      }
    }
    p {
      font-size: 14px;
      line-height: 18px;
      color: #e92070;
      @media (max-width: 480px) {
        text-align: center;
      }
    }
  }
`;
const Step4 = (props) => {
    const formData = props;
    const setFormData = (payload) => {
        return props.dispatch({
            type: "FormContent/setFormData",
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
        // switch (formData.planType) {
        //   case "lineaNueva":
        //     window.fbq("track", "Portate_Lineanueva_P4CompleteRegistration")
        //     break
        //   case "portabilidad":
        //     window.fbq("track", "Portate_Portate_P4CompleteRegistration")
        //     break
        // }
        setFormData(Object.assign(Object.assign({}, formData), { successFlow: true }));
        window.scrollTo(0, 0);
        ReactGA.pageview(window.location.pathname + `/?plan=${formData.selectedPlan}`);
    }, []);
    return (React.createElement(FinalSummary, null,
        React.createElement(RadiusContentWrapper, null,
            React.createElement("div", { className: "wrapper-summary" },
                React.createElement("div", { className: "summary-header" },
                    React.createElement("h2", { className: "summary-title" }, "Resumen de tu solicitud")),
                React.createElement("div", { className: "summary-body" },
                    React.createElement(Step3Plan, null),
                    React.createElement("div", { className: "summary-step" },
                        React.createElement("h2", null,
                            React.createElement("img", { src: IconEmail, alt: "sig paso" }),
                            " Siguiente paso"),
                        React.createElement("p", null, "Te enviaremos un correo electr\u00F3nico informando si tu solicitud fue aprobada y los plazos de entrega de tu nuevo Chip."),
                        React.createElement("p", null, "Revisa tu bandeja de correo en las pr\u00F3ximas 12 horas h\u00E1biles."),
                        React.createElement("a", { href: "https://www.wom.cl" },
                            React.createElement("button", null, "volver a WOM.CL"))))),
            React.createElement("div", { className: "summary-alert" },
                React.createElement("img", { src: IconLight, alt: "light" }),
                React.createElement("p", null, "Recuerda que, si tu solicitud es aprobada, solo el titular puede recibir el chip ya que tiene que firmar el contrato f\u00EDsico. Debes tener a mano tu c\u00E9dula de identidad."))),
        React.createElement(FrequentQuestions, null)));
};
export default connect(({ FormContent, ValidationContent }) => (Object.assign(Object.assign({}, FormContent), { ValidationContent })))(Step4);
//# sourceMappingURL=Step4.js.map