import React from "react";
import styled from "styled-components";
import modifyDesktop from "@/images/modifyDesktop.svg";
import modifyMobile from "@/images/modifyMobile.svg";
import storeAddress from "@/images/storeAddress.svg";
import Step2Address from "./Step2Address";
import TitleBlock from "./TitleBlock";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import RadiusContentWrapper from "./RadiusContentWrapper";
const RegionWrapper = styled.div `
  display: flex;
  width: 100%;
  padding: 18px 16px 17px;
  background: #f4f4f7;
  border-radius: 8px;
  .addressPart {
    display: flex;
    flex: 1;
    .addressWrapper {
      flex: 1;
      .addressType {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 16px;
        color: #381451;
      }
      .addressContent {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #381451;
      }
    }
  }
  .reChoose {
    display: flex;
    align-items: center;
    margin-right: 17px;
    .reChooseClickArea {
      display: flex;
      cursor: pointer;
    }
    .reChooseText {
      margin-right: 4px;
      ont-weight: bold;
      font-size: 14px;
      line-height: 20px;
      ext-transform: uppercase;
      color: #e92070;
    }
    .reChooseIcon {
      width: 17px;
      height: 20px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 16px 11px 12px;
    .reChoose {
      margin-top: 15px;
      justify-content: center;
    }
  }
`;
const StoreInfoWrapper = styled.div `
  margin-top: 29px;
  width: 80%;
  .title {
    width: 100%;
    padding-bottom: 4px;
    font-size: 16px;
    line-height: 20px;
    color: #7c6c8a;
    border-bottom: 1px dashed #ccc4d2;
  }
  .storeName {
    margin-top: 9px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #381451;
  }
  .storeTextWrapper {
    display: flex;
    .storeText {
      margin-right: 100px;
      font-size: 14px;
      line-height: 16px;
      color: #381451;
    }
  }
  .storeAddress {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .storeAddressIcon {
      width: 11px;
      height: 16px;
    }
    .storeAddressText {
      flex: 1;
      margin-left: 9px;
      font-size: 16px;
      line-height: 20px;
      color: #381451;
    }
    .share {
      width: 16px;
      height: 16px;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    .storeTextWrapper {
      justify-content: space-between;
      .storeText {
        margin-right: 0;
      }
    }
  }
`;
const StoreTime = styled.div `
  width: 80%;
  margin-top: 23px;
  .title {
    width: 100%;
    padding-bottom: 8px;
    font-size: 14px;
    line-height: 16px;
    color: #381451;
    border-bottom: 1px dashed #ccc4d2;
  }
  .timeItem {
    display: flex;
    width: 100%;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e2e8;
    &:last-child {
      border-bottom-width: 0;
    }
    .timeTitle {
      margin-left: 4px;
      font-size: 14px;
      line-height: 16px;
      color: #7c6c8a;
      &: nth;
    }
    .time {
      margin-right: 15px;
      font-size: 16px;
      line-height: 20px;
      color: #7c6c8a;
    }
    .red {
      color: #dd0028;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
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
const PickupStore = (props) => {
    const { store, setFormData } = props;
    const formData = props;
    const validationData = props;
    const resetStore = () => {
        const { setStore } = props;
        setFormData(Object.assign(Object.assign({}, formData), { storeInfo: {} }));
        setStore && setStore({});
    };
    console.log(props, !!validationData.dispatchRegionS, !!validationData.dispatchComunaS, !!validationData.contractRegionS, !!validationData.contractComunaS, !!validationData.contractAddressS);
    return (React.createElement(React.Fragment, null,
        React.createElement(RadiusContentWrapper, null,
            React.createElement(TitleBlock, { classAdd: "text-center mb-20", titulo: "Elige tus opciones de despacho" }),
            React.createElement(RegionWrapper, null,
                React.createElement("div", { className: "addressPart" },
                    React.createElement("div", { className: "addressWrapper" },
                        React.createElement("div", { className: "addressType" }, "Regi\u00F3n"),
                        React.createElement("div", { className: "addressContent" }, formData.dispatchRegion)),
                    React.createElement("div", { className: "addressWrapper" },
                        React.createElement("div", { className: "addressType" }, "Comuna"),
                        React.createElement("div", { className: "addressContent" }, formData.dispatchComuna))),
                React.createElement("div", { className: "reChoose" },
                    React.createElement("div", { onClick: resetStore, className: "reChooseClickArea" },
                        React.createElement("div", { className: "reChooseText" }, "MODIFICAR"),
                        window.innerWidth >= 768 ? (React.createElement("img", { src: modifyDesktop, alt: "reChoose", className: "reChooseIcon" })) : (React.createElement("img", { src: modifyMobile, alt: "reChoose", className: "reChooseIcon" }))))),
            React.createElement(StoreInfoWrapper, null,
                React.createElement("div", { className: "title" }, "Informaci\u00F3n de retiro"),
                React.createElement("div", { className: "storeName" }, store.NOMBRE),
                React.createElement("div", { className: "storeTextWrapper" },
                    React.createElement("div", { className: "storeText" }, "E-lockers"),
                    React.createElement("div", { className: "storeText" }, "GRATIS")),
                React.createElement("div", { className: "storeAddress" },
                    React.createElement("div", { className: "storeAddressIcon" },
                        React.createElement("img", { className: "storeAddressIcon", src: storeAddress, alt: "address" })),
                    React.createElement("div", { className: "storeAddressText" }, store.DIRECCION))),
            React.createElement(StoreTime, null,
                React.createElement("div", { className: "title" }, "Horarios de atenci\u00F3n"),
                React.createElement("div", { className: "timeItem" },
                    React.createElement("div", { className: "timeTitle" }, "Lunes a viernes"),
                    React.createElement("div", { className: "time" }, store.SEMANA)),
                React.createElement("div", { className: "timeItem" },
                    React.createElement("div", { className: "timeTitle" }, "S\u00E1bado"),
                    React.createElement("div", { className: "time" }, store.SABADO)),
                React.createElement("div", { className: "timeItem" },
                    React.createElement("div", { className: "timeTitle" }, "Domingo"),
                    React.createElement("div", { className: "time red" }, store.DOMINGO)))),
        React.createElement(RadiusContentWrapper, null,
            React.createElement(TitleBlock, { classAdd: "text-center", titulo: "Direcci\u00F3n para tu contrato" }),
            React.createElement(Step2Address, Object.assign({}, props, { regionName: "contractRegion", comunaName: "contractComuna", addressName: "contractAddress", addressNumName: "contractAddressNum" })),
            React.createElement(ButtonContainer, null,
                React.createElement(PrevButton, { stepNum: "Volver", stepTitle: "Tus Datos", route: `/app/?plan=${formData.selectedPlan}` }),
                React.createElement(NextButton, { stepNum: "3", stepTitle: "Resumen Final", route: `/paso3`, status: !!validationData.dispatchRegionS &&
                        !!validationData.dispatchComunaS &&
                        !!validationData.contractRegionS &&
                        !!validationData.contractComunaS &&
                        !!validationData.contractAddressS
                        ? "active"
                        : "innactive" })))));
};
export default PickupStore;
//# sourceMappingURL=PickupStore.js.map