import React from "react";
import styled from "styled-components";
import ItemOption from "./ItemOption";
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
    transition: background 0.2s ease;
    &.disabled {
      pointer-events: none;
      background: #e6e2e8;
    }
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
    transition: background 0.2s ease;
    &.disabled {
      pointer-events: none;
      background: #e6e2e8;
    }
    .arrow {
      margin-right: 10px;
      margin-top:20px
    }
  }
`;
const InputSelectRegiones = (props) => {
    const { classAdd, regionsList = [], fieldName, comunaName, disabledFields = false, loaded, setFormData, setValidationData } = props;
    const formData = props;
    const validationData = props;
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [fieldName]: e.target.value }));
        if (formData[comunaName] !== "") {
            setFormData(Object.assign(Object.assign({}, formData), { [fieldName]: e.target.value, [comunaName]: regionsList.find((region) => region.REGION === e.target.value).COMUNAS[0].COMUNA }));
        }
        setValidationData(Object.assign(Object.assign({}, validationData), { [fieldName]: true }));
    };
    // useEffect(()=>{
    //   loaded && setFormData({...formData, [comunaName]: regionsList.find(region=> region.REGION === formData[fieldName]).COMUNAS[0].COMUNA})
    // },[formData[fieldName]])
    const regiones = regionsList.map((region, i) => {
        return React.createElement(ItemOption, { key: i, text: region.REGION });
    });
    return (React.createElement(SelectContainer, { className: classAdd },
        React.createElement("select", { value: formData[fieldName] === ""
                ? "SELECCIONA UNA REGIÓN"
                : formData[fieldName], id: "select-1", onChange: handleChange, className: disabledFields ? "disabled" : undefined },
            formData[fieldName] === "" && (React.createElement(ItemOption, { key: "0202", text: "Selecciona una regi\u00F3n" })),
            regiones),
        React.createElement("label", { htmlFor: "select-1", className: disabledFields ? "disabled" : undefined },
            React.createElement("img", { className: "arrow", src: Arrow, alt: "arrow" }))));
};
export default InputSelectRegiones;
//# sourceMappingURL=InputSelectRegiones.js.map