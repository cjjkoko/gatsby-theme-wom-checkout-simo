import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckboxOn from "@/images/checkbox-on.svg";
import Step2Address from "./Step2Address";
import PlanType from "./PlanType";
import StoreListItem from "./StoreListItem";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import TitleBlock from "./TitleBlock";
import ReactGA from "react-ga";
import Vector from "@/images/Vector.svg";
import Alerta from "@/images/icon_alerta.svg";
import RadiusContentWrapper from "./RadiusContentWrapper";
const PlanTypeContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  .planTypeWrapper {
    width: 48%;
    max-width: 280px;
    @media (max-width: 480px) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
const PlanTypeOneContentWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PlanTypeOneStaticMessage = styled.div `
  display: flex;
  margin-top: 7px;
  width: 100%;
  .messageIcon {
    height: 16px;
    margin-right: 9px;
  }
  .message {
    font-size: 12px;
    line-height: 16px;
    color: #574466;
  }
`;
const TipWrapper = styled.div `
  display: flex;
  width: 88%;
  background: rgba(233, 172, 32, 0.1);
  border: 1px solid #e9ac20;
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 480px) {
    width: 100%;
  }
  .alerta {
    height: 15px;
    margin: 19px 21px 0 18px;
  }
  .title {
    margin: 13px 0 8px;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #7c6c8a;
  }
  .tips,
  .router {
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #7c6c8a;
  }
  .router {
    margin-bottom: 21px;
    color: #e92070;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const StoresTitle = styled.div `
  display: flex;
  margin-top: 35px;
  padding-bottom: 6px;
  width: 100%;
  max-width: 550px;
  border-bottom: 1px solid #e6e2e8;
  .number {
    margin-left: 20px;
    margin-right: 9px;
    color: #574466;
  }
  .text {
    color: #7c6c8a;
  }
`;
const ButtonContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;
const BajadaText = styled.p `
  color: #7c6c8a;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  @media (max-width: 480px) {
    text-align: left;
  }
`;
const ConditionCheck = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding-top: 20px;
  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
  input {
    display: none;
    &:checked + label {
      &:after {
        background-color: #e92070;
        background-image: url(${CheckboxOn});
        border-color: #e92070;
        transition: background-color 0.5s, background-image 0.5s,
          border-color 0.5s;
      }
    }
  }
  label {
    padding-left: 40px;
    position: relative;
    color: #7c6c8a;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    a {
      color: #7c6c8a;
      text-decoration-line: underline;
      text-transform: uppercase;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
    &:after {
      content: "";
      height: 24px;
      width: 24px;
      border: 1px solid#FF006F;
      border-radius: 2px;
      background-color: transparent;
      background-position: center center;
      background-repeat: no-repeat;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: auto;
      margin: auto;
      transition: background-color 0.3s, background-image 0.5s,
        border-color 0.3s;
      @media (max-width: 480px) {
        height: 25px;
        width: 25px;
      }
    }
  }
`;
const Step2 = (props) => {
    const { regioneComunasList, setValidationData, setFormData } = props;
    const validationData = props;
    const formData = props;
    const [disabledFields, setDisabledFields] = useState(false);
    const [storeList, setStoreList] = useState([]);
    const [hasStore, setHasStore] = useState(true);
    const { dispatchRegion, dispatchComuna } = formData;
    useEffect(() => {
        setFormData(Object.assign(Object.assign({}, formData), { successFlow: false }));
        if (dispatchRegion !== "" &&
            dispatchComuna !== "" &&
            regioneComunasList.regiones) {
            const region = regioneComunasList.regiones &&
                regioneComunasList.regiones.filter((regioneItem) => {
                    return regioneItem.REGION === dispatchRegion;
                })[0];
            if (region && region.COMUNAS) {
                const comuna = region.COMUNAS.filter((comunaItem) => comunaItem.COMUNA === dispatchComuna)[0];
                if (comuna && comuna.ELOCKERS && comuna.ELOCKERS.length !== 0) {
                    const availableStore = comuna.ELOCKERS.filter(
                    // (store) => store.ESTADO === "ABIERTA"
                    (store) => true);
                    if (availableStore.length !== 0) {
                        setStoreList(availableStore);
                        setHasStore(true);
                    }
                    else {
                        disableStorePickup();
                    }
                }
                else {
                    disableStorePickup();
                }
            }
            else {
                disableStorePickup();
            }
        }
        if (!regioneComunasList.regiones) {
            window.scrollTo(0, 0);
            ReactGA.pageview(window.location.pathname + `/?plan=${formData.selectedPlan}`);
        }
    }, []);
    const disableStorePickup = () => {
        setHasStore(false);
        setStoreList([]);
        setFormData(Object.assign(Object.assign({}, formData), { dispatchType: "Despacho a domicilio" }));
    };
    const populateContract = (e) => {
        setDisabledFields(!disabledFields);
        if (!e.target.checked) {
            setFormData(Object.assign(Object.assign({}, formData), { beSameWithDispatch: false }));
            return false;
        }
        const region = formData.dispatchRegion;
        const comuna = formData.dispatchComuna;
        const direccion = formData.dispatchAddress;
        const direccion2 = formData.dispatchAddressNum;
        let formValidityState = {
            contractRegion: false,
            contractComuna: false,
            contractAddress: false,
            contractAddressNum: false,
        };
        setFormData(Object.assign(Object.assign({}, formData), { beSameWithDispatch: true, contractRegion: region, contractComuna: comuna, contractAddress: direccion, contractAddressNum: direccion2 }));
        validationData.dispatchRegion
            ? (formValidityState = Object.assign(Object.assign({}, formValidityState), { contractRegion: true }))
            : (formValidityState = Object.assign(Object.assign({}, formValidityState), { contractRegion: false }));
        validationData.dispatchComuna
            ? (formValidityState = Object.assign(Object.assign({}, formValidityState), { contractComuna: true }))
            : (formValidityState = Object.assign(Object.assign({}, formValidityState), { contractComuna: false }));
        validationData.dispatchAddress
            ? (formValidityState = Object.assign(Object.assign({}, formValidityState), { contractAddress: true, contractAddressNum: true }))
            : (formValidityState = Object.assign(Object.assign({}, formValidityState), { contractAddress: false, contractAddressNum: false }));
        setValidationData(Object.assign(Object.assign({}, validationData), formValidityState));
    };
    const onChoose = (store) => {
        const { setStore } = props;
        setFormData(Object.assign(Object.assign({}, formData), { storeInfo: store }));
        setStore && setStore(store);
    };
    const ButtonWrapper = () => {
        return (React.createElement(ButtonContainer, null,
            React.createElement(PrevButton, { stepNum: "Volver", stepTitle: "Tus Datos", route: `/Home/app/?plan=${formData.selectedPlan}` }),
            formData.dispatchType !== "" && (React.createElement(NextButton, { stepNum: "3", stepTitle: "Resumen Final", route: `/paso3`, status: formData.dispatchType === "Despacho a domicilio" &&
                    validationData.dispatchRegion &&
                    validationData.dispatchComuna &&
                    validationData.dispatchAddress &&
                    validationData.contractRegion &&
                    validationData.contractComuna &&
                    validationData.contractAddress
                    ? "active"
                    : "innactive" }))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(RadiusContentWrapper, null,
            React.createElement(TitleBlock, { classAdd: "text-center mb-20", titulo: "Elige tus opciones de despacho" }),
            React.createElement(BajadaText, null, "Selecciona regi\u00F3n y comuna donde quieres despachar o retirar tus productos."),
            React.createElement(Step2Address, Object.assign({}, props, { showparty: 1, regionName: "dispatchRegion", comunaName: "dispatchComuna" })),
            !hasStore && (React.createElement(TipWrapper, null,
                React.createElement("img", { className: "alerta", src: Alerta, alt: "vector" }),
                React.createElement("div", null,
                    React.createElement("div", { className: "title" }, "Retiro en tienda no disponible"),
                    React.createElement("div", { className: "tips" }, "Lamentablemente no tenemos disponibilidad en la comuna seleccionada"),
                    React.createElement("a", { className: "router" })))),
            dispatchRegion !== "" && dispatchComuna !== "" && (React.createElement(PlanTypeContainer, null,
                React.createElement("div", { className: "planTypeWrapper" },
                    React.createElement(PlanType, { title: "Retiro en tienda", subtitle: hasStore ? "Desde 5 días hábiles" : "NO DISPONIBLE", status: hasStore ? "GRATIS" : null, type: "Retiro en tienda", disabled: !hasStore || dispatchRegion === "" || dispatchComuna === "", selected: formData.dispatchType === "Retiro en tienda" && hasStore
                            ? true
                            : false, dataName: "dispatchType" }),
                    formData.dispatchType === "Retiro en tienda" && (React.createElement(PlanTypeOneStaticMessage, null,
                        React.createElement("img", { className: "messageIcon", src: Vector, alt: "vector" }),
                        React.createElement("div", { className: "message" }, "Retira tu equipo en nuestros E-Locker a trav\u00E9s de un c\u00F3digo QR")))),
                React.createElement("div", { className: "planTypeWrapper" },
                    React.createElement(PlanType, { title: "Despacho a domicilio", subtitle: "Desde 5 días hábiles", status: "GRATIS", type: "Despacho a domicilio", selected: formData.dispatchType === "Despacho a domicilio" || !hasStore
                            ? true
                            : false, dataName: "dispatchType" }),
                    formData.dispatchType === "Despacho a domicilio" && (React.createElement(PlanTypeOneStaticMessage, null,
                        React.createElement("img", { className: "messageIcon", src: Vector, alt: "vector" }),
                        React.createElement("div", { className: "message" }, "Solo el titular puede recibir el Chip")))))),
            formData.dispatchType === "Retiro en tienda" && (React.createElement(PlanTypeOneContentWrapper, null,
                React.createElement(StoresTitle, null,
                    React.createElement("div", { className: "number" }, storeList ? storeList.length : 0),
                    React.createElement("div", { className: "text" }, "tiendas encontradas")),
                storeList &&
                    storeList.map((item, index) => {
                        return (React.createElement(StoreListItem, { onChoose: onChoose, data: item, key: index }));
                    }))),
            formData.dispatchType === "Despacho a domicilio" ? (React.createElement(React.Fragment, null,
                React.createElement(BajadaText, null, "Ingresa la direcci\u00F3n donde despacharemos tu producto."),
                React.createElement(Step2Address, Object.assign({}, props, { showparty: 2, addressName: "dispatchAddress", addressNumName: "dispatchAddressNum" })))) : (React.createElement(ButtonWrapper, null))),
        formData.dispatchType === "Despacho a domicilio" && (React.createElement(RadiusContentWrapper, null,
            React.createElement(TitleBlock, { classAdd: "text-center", titulo: "Direcci\u00F3n para tu contrato" }),
            React.createElement(ConditionCheck, null,
                React.createElement("input", { type: "checkbox", id: "precio-2", value: "2", checked: formData["beSameWithDispatch"], onChange: populateContract }),
                React.createElement("label", { htmlFor: "precio-2" }, "Usar la misma direcci\u00F3n de despacho.")),
            React.createElement(Step2Address, Object.assign({}, props, { regionName: "contractRegion", comunaName: "contractComuna", addressName: "contractAddress", addressNumName: "contractAddressNum", disabledFields: disabledFields })),
            React.createElement(ButtonWrapper, null)))));
};
export default Step2;
//# sourceMappingURL=ChooseReceiptType.js.map