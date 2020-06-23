import React from "react";
import styled from "styled-components";
import IconChip from "@/images/icon_chip.svg";
const WrapperMessage = styled.div `
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  @media (max-width: 480px) {
    border-radius: 0;
  }
  .message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    hgroup {
      margin-left: 15px;
      h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #381451;
      }
      h4 {
        font-size: 16px;
        line-height: 20px;
        color: #381451;
      }
    }
  }
`;
const Step4Message = () => {
    return (React.createElement(WrapperMessage, null,
        React.createElement("div", { className: "message" },
            React.createElement("img", { src: IconChip, alt: "chip" }),
            React.createElement("hgroup", null,
                React.createElement("h2", null, "\u00A1Felicidades!"),
                React.createElement("h4", null, "Tu solicitud ha sido ingresada")))));
};
export default Step4Message;
//# sourceMappingURL=Step4Message.js.map