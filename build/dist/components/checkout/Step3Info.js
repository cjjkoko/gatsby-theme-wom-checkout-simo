import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import modifyDesktop from "@/images/modifyDesktop.svg";
import modifyMobile from "@/images/modifyMobile.svg";
import IcoUpload from "@/images/upload.svg";
import contrato from "@@/static/Anexo-planes-y-Tarifas.pdf";
const PlanSummary = styled.div `
  flex: 1;
  a {
    text-decoration: none;
  }
  .planType {
    margin-bottom: 2px;
    color: #381451;
    font-size: 12px;
    line-height: 15px;
  }
  .planTypeValue {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #2d1441;
    margin-bottom: 20px;
  }
  @media (max-width: 640px) {
    margin-top: 20px;
  }
  p {
    color: #381451;
    font-size: 12px;
    line-height: 15px;
  }
  .titleWrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .summary-edit {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-bottom: 10px;
      p {
        color: #e92070;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        @media (max-width: 480px) {
          font-size: 12px;
        }
      }
      img {
        margin-left: 5px;
      }
    }
  }
  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #2d1441;
    margin-bottom: 10px;
  }
  .summary-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 0;
    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
    div {
      width: 33.3%;
      @media (max-width: 480px) {
        width: 50%;
        margin-bottom: 15px;
      }
    }
    p {
      color: #381451;
      font-size: 11px;
      line-height: 14px;
      @media (max-width: 480px) {
        font-size: 11px;
      }
    }
    h3 {
      font-weight: 700;
      text-transform: capitalize;
      font-size: 14px;
      line-height: 18px;
      color: #381451;
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }
  .chipWrapper {
    display: flex;
    justify-content: space-between;
    padding: 3px 0 12px;
    p {
      font-size: 14px;
      line-height: 18px;
      color: #381451;
    }
  }
  .summary-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 14px;
      line-height: 18px;
      color: #381451;
    }
    h2 {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 0;
    }
    span {
      font-size: 14px;
      line-height: 18px;
      color: #7c6c8a;
      display: block;
      &.mw-250 {
        margin-top: 14px;
        margin-bottom: 6px;
        max-width: 250px;
        font-size: 12px;
        line-height: 15px;
        color: #7c6c8a;
      }
    }
    .text-right {
      text-align: right;
    }
  }
  .addresssum {
    font-size: 14px;
    line-height: 164.1%;
    color: #7c6c8a;
    word-break: break-all;
  }
  .summary-download {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      p {
        color: #e92070;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        @media (max-width: 480px) {
          text-align: right;
        }
      }
      img {
        width: 20px;
        margin-left: 9px;
        margin-bottom: 3px;
      }
    }
  }
  .divider-dashed {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
    border-bottom: 1px dashed #e6e2e8;
    &.mt-20 {
      margin-top: 20px;
    }
    &.mb-20 {
      margin-bottom: 20px;
    }
    &.mt-10 {
      margin-top: 10px;
    }
    &.mb-10 {
      margin-bottom: 10px;
    }
  }
`;
const Step3Info = (props) => {
    const formData = props;
    console.log(formData);
    return (React.createElement(PlanSummary, null,
        React.createElement("div", { className: "planType" }, "Tipo de contrataci\u00F3n"),
        React.createElement("div", { className: "planTypeValue" },
            formData.planType === "lineaNueva" ? "Línea Nueva" : "Portabilidad",
            " "),
        formData.planType === "portabilidad" && (React.createElement("div", { className: "summary-heading" },
            React.createElement("div", null,
                React.createElement("p", null, "L\u00EDnea a portar"),
                React.createElement("h3", null, formData.phoneToMigrate)),
            React.createElement("div", null,
                React.createElement("p", null, "Tipo de plan"),
                React.createElement("h3", null, formData.originPlanType)),
            React.createElement("div", null,
                React.createElement("p", null, "Compa\u00F1\u00EDa de origen"),
                React.createElement("h3", null, formData.previousCarrier)))),
        React.createElement("div", { className: "divider-dashed mb-20" }),
        React.createElement("h2", null, "Recibir\u00E1s"),
        React.createElement("div", { className: "chipWrapper" },
            React.createElement("div", null, "CHIP"),
            React.createElement("div", null, "GRATIS")),
        React.createElement("div", { className: "divider-dashed mb-10" }),
        React.createElement("div", { className: "titleWrapper" },
            React.createElement("h2", null, "Tipo de entrega"),
            React.createElement(Link, { to: "/app/paso2" },
                React.createElement("div", { className: "summary-edit" },
                    React.createElement("p", null, "MODIFICAR"),
                    window.innerWidth >= 768 ? (React.createElement("img", { src: modifyDesktop, alt: "reChoose", className: "reChooseIcon" })) : (React.createElement("img", { src: modifyMobile, alt: "reChoose", className: "reChooseIcon" }))))),
        React.createElement("div", { className: "summary-between" },
            React.createElement("div", null,
                React.createElement("p", null, formData.dispatchType === "Retiro en tienda"
                    ? "Retiro en tienda - E-Lockers"
                    : "Despacho a domicilio"),
                React.createElement("span", { className: "mw-250" },
                    " ",
                    formData.dispatchType === "Retiro en tienda"
                        ? "DIRECCIÓN TIENDA WOM"
                        : "DIRECCIÓN DESPACHO")),
            React.createElement("div", null,
                React.createElement("p", { className: "text-right" }, "GRATIS"))),
        React.createElement("div", { className: "addresssum" }, formData.dispatchType === "Retiro en tienda"
            ? formData.storeInfo.DIRECCION
            : `${formData.dispatchAddress},${formData.dispatchAddressNum}`),
        React.createElement("div", { className: "summary-download" },
            React.createElement("a", { href: contrato, target: "_blank", rel: "noopener noreferrer" },
                React.createElement("p", null, "revisa el documento tipo que firmar\u00E1s"),
                React.createElement("img", { src: IcoUpload, alt: "upload" })))));
};
export default Step3Info;
//# sourceMappingURL=Step3Info.js.map