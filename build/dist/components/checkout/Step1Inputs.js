import React from "react";
import InputItem from "./InputItem";
import styled from "styled-components";
import IconRut from "@/images/formulario/icon_rut.svg";
import IconUser from "@/images/formulario/icon_user.svg";
import IconPhone from "@/images/formulario/icon_phone.svg";
import IconEmail from "@/images/formulario/icon_email.svg";
import { connect } from "react-redux";
const WrapInputsInline = styled.div `
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;
const Step1Inputs = (props) => {
    return (React.createElement(WrapInputsInline, null,
        React.createElement(InputItem, Object.assign({}, props, { nameInput: "rut", iconInput: IconRut, nameLabel: "Rut", length: "12", errorInfo: "Ingrea un RUT v\u00E1lido", exampleInput: "Ej: 12345678-5" })),
        React.createElement(InputItem, Object.assign({}, props, { nameInput: "ci", iconInput: IconRut, nameLabel: "N\u00BA Serie C.I", length: "11", errorInfo: "Ingresa un n\u00FAmero de serie v\u00E1lido", exampleInput: "Ej: 102234428" })),
        React.createElement(InputItem, Object.assign({}, props, { nameInput: "name", iconInput: IconUser, nameLabel: "Nombres", length: "50", exampleInput: "Ej: Juan" })),
        React.createElement(InputItem, Object.assign({}, props, { nameInput: "lastName", iconInput: IconUser, nameLabel: "Apellidos", length: "50", exampleInput: "Ej: Juan" })),
        React.createElement(InputItem, Object.assign({}, props, { nameInput: "phone", iconInput: IconPhone, nameLabel: "Tel\u00E9fono de contacto", length: "9", fieldType: "number", exampleInput: "Ej: 987654321" })),
        React.createElement(InputItem, Object.assign({}, props, { nameInput: "email", iconInput: IconEmail, nameLabel: "Correo electr\u00F3nico", length: "50", fieldType: "email", exampleInput: "Ej: usuario@dominio.cl" }))));
};
export default connect(({ FormContent, ValidationContent }) => (Object.assign(Object.assign({}, FormContent), { ValidationContent })))(Step1Inputs);
//# sourceMappingURL=Step1Inputs.js.map