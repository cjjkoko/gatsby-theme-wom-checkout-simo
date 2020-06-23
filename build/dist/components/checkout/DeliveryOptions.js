import React, { Fragment } from 'react';
import TitleBlock from './TitleBlock';
import styled from 'styled-components';
import IcoEditar from '@/images/ico_editar.svg';
import IcoGps from '@/images/ico_gps.svg';
import IcoLocation from '@/images/open_in_new.svg';
const WrapperDelivery = styled.div `
  width: 100%;
  .delivery-edit{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F4F4F7;
    border-radius: 8px;
    padding: 18px 15px;
    margin-top: 35px;
    margin-bottom: 30px;
    @media(max-width: 480px){
      flex-wrap: wrap;
      justify-content: space-around;
    }
    p{
      color: #381451;
      font-size: 14px;
      line-height: 16px;
    }
    h3{
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #381451;
    }
    .edit{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media(max-width: 480px){
        width: 100%;
        margin-top: 10px;
      }
      p{
        color: #E92070;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        @media(max-width: 480px){
          font-size: 12px;
        }
      }
      img{
        margin-left: 5px;
      }
    }
  }
  .delivery-body{
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    h3{
      color: #7C6C8A;
      font-size: 16px;
      line-height: 20px;
      border-bottom: 1px dashed #CCC4D2;
      padding-bottom: 10px;
    }
    .e-locker{
      width: 100%;
      margin: 20px 0;
      padding: 0 20px;
      @media(max-width: 480px){
        padding: 0;
      }
      h4{
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #381451;
      }
      .locker-text{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p{
          color: #381451;
          font-size: 14px;
          line-height: 16px;
        }
      }
      .locker-location{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        p{
          color: #381451;
          font-size: 16px;
          line-height: 20px;
          margin: 0 10px 0 8px;
        }
      }
    }
    ul{
      li{
        border-bottom: 1px solid #E6E2E8;
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p{
          font-size: 16px;
          line-height: 20px;
          color: #7C6C8A;
        }
        span{
          text-transform: uppercase;
          color: #DD0028;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
`;
const DeliveryOptions = () => {
    return (React.createElement(Fragment, null,
        React.createElement(TitleBlock, { classAdd: "text-center", titulo: "Elige tus opciones de despacho" }),
        React.createElement(WrapperDelivery, null,
            React.createElement("div", { className: "delivery-edit" },
                React.createElement("div", null,
                    React.createElement("p", null, "Regi\u00F3n"),
                    React.createElement("h3", null, "Metropolitana")),
                React.createElement("div", null,
                    React.createElement("p", null, "Comuna"),
                    React.createElement("h3", null, "Macul")),
                React.createElement("div", { className: "edit" },
                    React.createElement("p", null, "MODIFICAR"),
                    " ",
                    React.createElement("img", { src: IcoEditar, alt: "editar" }))),
            React.createElement("div", { className: "delivery-body" },
                React.createElement("h3", null, "Informaci\u00F3n retiro"),
                React.createElement("div", { className: "e-locker" },
                    React.createElement("h4", null, "Sucursal Vicu\u00F1a Mackenna"),
                    React.createElement("div", { className: "locker-text" },
                        React.createElement("p", null, "E-lockers"),
                        React.createElement("p", null, "gratis")),
                    React.createElement("div", { className: "locker-location" },
                        React.createElement("img", { src: IcoGps, alt: "gps" }),
                        React.createElement("p", null, "General Mackenna #1369, Santiago, Regi\u00F3n Metropolitana"),
                        React.createElement("img", { src: IcoLocation, alt: "in new" }))),
                React.createElement("h3", null, "Horarios de atenci\u00F3n"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("p", null, "Lunes a viernes"),
                        React.createElement("p", null, "08:00 a 17:00")),
                    React.createElement("li", null,
                        React.createElement("p", null, "S\u00E1bado"),
                        React.createElement("p", null, "10:00 a 14:00")),
                    React.createElement("li", null,
                        React.createElement("p", null, "Domingo"),
                        React.createElement("span", null, "Cerrado")))))));
};
export default DeliveryOptions;
//# sourceMappingURL=DeliveryOptions.js.map