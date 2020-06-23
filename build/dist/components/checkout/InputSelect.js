import React from "react";
import styled from "styled-components";
import Arrow from "@/images/icon_arrow_right.svg";
const SelectContainer = styled.div `
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #7c6c8a;
  margin-top: 10px;
  @media (max-width: 480px) {
    width: 100%;
  }
  &.full-width {
    width: 100%;
  }
  &.full-border {
    border: 1px solid #7c6c8a;
    border-radius: 5px;
  }
  select {
    width: 100%;
    height: 48px;
    border: none;
    padding: 10px 27px 10px 10px;
    background-color: #ffffff;
    outline: none;
    cursor: pointer;
    color: #7c6c8a;
    font-size: 16px;
    line-height: 20px;
  }
  label {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    pointer-events: none;
    .arrow {
      margin-right: 10px;
    }
  }
`;
const InputSelect = (props) => {
    const { classAdd } = props;
    const formData = props;
    const validationData = props;
    const handleChange = (e) => {
        props.dispatch({
            type: "FormContent/setFormData",
            payload: Object.assign(Object.assign({}, formData), { previousCarrier: e.target.value })
        });
        e.target.value !== ""
            ? props.dispatch({
                type: "ValidationContent/setValidationData",
                payload: Object.assign(Object.assign({}, validationData), { previousCarrier: true })
            })
            : props.dispatch({
                type: "ValidationContent/setValidationData",
                payload: Object.assign(Object.assign({}, validationData), { previousCarrier: true })
            });
    };
    return (React.createElement(SelectContainer, { className: classAdd },
        React.createElement("select", { value: formData.previousCarrier, id: "select-1", onChange: handleChange },
            React.createElement("option", { value: "" }, "Compa\u00F1\u00EDa de origen"),
            React.createElement("option", { value: "Movistar" }, "Movistar"),
            React.createElement("option", { value: "Claro" }, "Claro"),
            React.createElement("option", { value: "Entel" }, "Entel"),
            React.createElement("option", { value: "Virgin Mobile" }, "Virgin Mobile"),
            React.createElement("option", { value: "Simple Movil" }, "Simple Movil"),
            React.createElement("option", { value: "VTR" }, "VTR"),
            React.createElement("option", { value: "Falabella" }, "Falabella"),
            React.createElement("option", { value: "Telef\u00F3nica del sur SA" }, "Telef\u00F3nica del sur SA"),
            React.createElement("option", { value: "Netline" }, "Netline")),
        React.createElement("label", { htmlFor: "select-1" },
            React.createElement("img", { className: "arrow", src: Arrow, alt: "arrow" }))));
};
export default InputSelect;
//# sourceMappingURL=InputSelect.js.map