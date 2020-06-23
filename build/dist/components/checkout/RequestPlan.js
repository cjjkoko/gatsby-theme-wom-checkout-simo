import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanArrow from "@/images/arrow_2.svg";
import Plan15gb from "@/images/planes/plan15.svg";
import Plan25gb from "@/images/planes/plan25.svg";
import Plan35gb from "@/images/planes/plan35.svg";
import { connect } from "react-redux";
const RequestContainer = styled(motion.div) `
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 9;
  .request-heading {
    width: 230px;
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    right: auto;
    bottom: 0;
    left: -134px;
    margin: auto;
    height: 37px;
    background-color: #76489b;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      color: #ffffff;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }
    img {
      transform: rotate(0deg);
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .request-plan {
    box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
    border-radius: 8px;
  }
`;
const RequestPlan = ({ selectedPlan }) => {
    const [open, setOpen] = useState(true);
    const variantsOpen = {
        open: {
            transform: "translateX(0%)",
            transition: { duration: 0.3 }
        },
        close: {
            transform: "translateX(100%)",
            transition: { duration: 0.3 }
        }
    };
    // if(window.location.pathname!=='/'){
    //   return(
    //       <div></div>
    //   )
    // }
    if (selectedPlan !== undefined) {
        return (React.createElement(RequestContainer, { variants: variantsOpen, initial: "close", animate: open ? "open" : "close" },
            React.createElement("div", { className: "request-heading", onClick: () => setOpen(!open) },
                React.createElement("p", null, "est\u00E1s solicitando..."),
                React.createElement("img", { className: !open ? "active" : "", src: PlanArrow, alt: "arrow" })),
            React.createElement("div", { className: "request-plan" },
                selectedPlan === undefined && (React.createElement("img", { src: Plan15gb, alt: "plan 15 gb" })),
                selectedPlan === "15gb" && (React.createElement("img", { src: Plan15gb, alt: "plan 15 gb" })),
                selectedPlan === "25gb" && (React.createElement("img", { src: Plan25gb, alt: "plan 25 gb" })),
                selectedPlan === "35gb" && (React.createElement("img", { src: Plan35gb, alt: "plan 35 gb" })))));
    }
    else {
        return React.createElement("div", null);
    }
};
export default connect(({ FormContent, ValidationContent }) => (Object.assign(Object.assign({}, FormContent), ValidationContent)))(RequestPlan);
//# sourceMappingURL=RequestPlan.js.map