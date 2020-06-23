import React from "react";
import queryString from "query-string";
import styled from "styled-components";
import PlanType from "./PlanType";
import Step1Inputs from "./Step1Inputs";
import Step1InputsPortabilidad from "./Step1InputsPortabilidad";
import Step1PhoneMessage from "./Step1PhoneMessage";
import TitleBlock from "./TitleBlock";
import NextButton from "./NextButton";
import { motion, AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";
import RequestPlan from "./RequestPlan";
import RequestPlanMob from "./RequestPlanMob";
import RadiusContentWrapper from "./RadiusContentWrapper";
import { connect } from "react-redux";
import { validate } from "rut.js";
const StepWrapper = styled.div `
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 18px;
    line-height: 23px;
    color: #7c6c8a;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .plan-types-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .planTypeWrapper {
      width: 48%;
      max-width: 280px;
      @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .bot-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    @media (max-width: 480px) {
      margin-top: 20px;
    }
  }
`;
const BajadaText = styled.p `
  font-size: 16px;
  line-height: 20px;
  color: #7c6c8a;
`;
const MotionDiv = styled(motion.div) `
  width: 100%;
`;
const VoidContainer = styled.div `
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const duration = 0.3;
const variants = {
    initial: {
        opacity: 0,
        height: 0
    },
    enter: {
        height: "auto",
        opacity: 1,
        transition: {
            duration,
            when: "beforeChildren"
        }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            height: { delay: 0.2 },
            duration
        }
    }
};
class Step1 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showPc: true
        };
    }
    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        this.props.dispatch({
            type: "FormContent/setFormData",
            payload: {
                selectedPlan: parsed.plan,
                successFlow: false
            }
        });
        ReactGA.pageview(window.location.pathname + parsed.plan);
        this.setState({
            showPc: window.innerWidth >= 768
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { rutS, rut } = this.props;
        if (validate(rut)) {
            // this.props.dispatch({
            //   type:"Magento/getCart"
            // })
        }
    }
    render() {
        console.log("sssss", this.props.selectedPlan, this.props);
        if ((this.props.selectedPlan !== undefined && this.props.selectedPlan === "15gb") ||
            (this.props.selectedPlan !== undefined && this.props.selectedPlan === "25gb") ||
            (this.props.selectedPlan !== undefined && this.props.selectedPlan === "35gb")) {
            return (React.createElement(React.Fragment, null,
                this.state.showPc ? React.createElement(RequestPlan, null) : React.createElement(RequestPlanMob, null),
                React.createElement(RadiusContentWrapper, null,
                    React.createElement(StepWrapper, null,
                        React.createElement("h1", null, "Solicita tu plan WOM en l\u00EDnea"),
                        React.createElement("div", { className: "plan-types-container" },
                            React.createElement("div", { className: "planTypeWrapper" },
                                React.createElement(PlanType, { title: "Quiero portarme", subtitle: "C\u00E1mbiate a WOM manteniendo tu n\u00FAmero de tel\u00E9fono actual.", type: "portabilidad", selected: this.props.planType === "portabilidad" ? true : false, dataName: "planType" })),
                            React.createElement("div", { className: "planTypeWrapper" },
                                React.createElement(PlanType, { title: "L\u00EDnea nueva", subtitle: "Obt\u00E9n un nuevo n\u00FAmero con WOM.", type: "lineaNueva", selected: this.props.planType === "lineaNueva" ? true : false, dataName: "planType" }))),
                        React.createElement(AnimatePresence, null,
                            this.props.planType !== "" && (React.createElement(MotionDiv, { variants: variants, key: "23236", initial: "initial", animate: "enter", exit: "exit" },
                                React.createElement(TitleBlock, { classAdd: "mb-20", titulo: "Informaci\u00F3n Personal" }),
                                React.createElement(BajadaText, null, "Ingresa tus datos y revisa que la informaci\u00F3n sea correcta."),
                                React.createElement(Step1Inputs, null))),
                            this.props.planType === "portabilidad" && (React.createElement(MotionDiv, { variants: variants, key: "135sdg", initial: "initial", animate: "enter", exit: "exit" },
                                React.createElement(TitleBlock, { titulo: "Datos de la l\u00EDnea a portar." }),
                                React.createElement(Step1InputsPortabilidad, null))),
                            this.props.planType === "lineaNueva" ||
                                this.props.planType === "portabilidad" ? null : (React.createElement(MotionDiv, { variants: variants, key: "13513", initial: "initial", animate: "enter", exit: "exit" },
                                React.createElement(Step1PhoneMessage, null)))),
                        React.createElement("div", { className: "bot-button-container" }, this.props.planType === "lineaNueva" ||
                            this.props.planType === "portabilidad" ? (React.createElement(NextButton, { stepNum: "2", stepTitle: "Despacho", route: `/paso2`, status: this.props.planType === "portabilidad"
                                ? this.props.ciS &&
                                    this.props.rutS &&
                                    this.props.nameS &&
                                    this.props.lastNameS &&
                                    this.props.phoneS &&
                                    this.props.emailS &&
                                    this.props.phoneToMigrateS &&
                                    this.props.originPlanTypeS &&
                                    this.props.previousCarrierS
                                    ? "active"
                                    : "innactive"
                                : this.props.ciS &&
                                    this.props.rutS &&
                                    this.props.nameS &&
                                    this.props.lastNameS &&
                                    this.props.phoneS &&
                                    this.props.emailS
                                    ? "active"
                                    : "innactive" })) : null)))));
        }
        else {
            return (React.createElement(React.Fragment, null,
                this.state.showPc ? React.createElement(RequestPlan, null) : React.createElement(RequestPlanMob, null),
                React.createElement(VoidContainer, null,
                    React.createElement("h1", null, "No hay plan seleccionado"))));
        }
    }
}
export default connect(({ FormContent, ValidationContent }) => (Object.assign(Object.assign({}, FormContent), ValidationContent)))(Step1);
//# sourceMappingURL=Step1.js.map