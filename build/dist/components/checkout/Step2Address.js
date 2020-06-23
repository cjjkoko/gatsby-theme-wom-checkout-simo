import React, { useState, useEffect } from "react";
import axios from "axios";
import InputItem from "./InputItem";
import styled from "styled-components";
import IconUbic from "@/images/icon_ubicacion.svg";
import { InputSelect } from "gatsby-theme-wom-magento";
import { connect } from "react-redux";
import ItemOption from "./ItemOption";
const FormAdress = styled.div `
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  .select-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #7c6c8a;
  }
  .disabled {
      pointer-events: none;
      background: #e6e2e8;
  }
`;
const Step2Adress = (props) => {
    const { regionName, comunaName, addressName, addressNumName, disabledFields = false, showparty = 0 } = props;
    const [regionsList, setRegionsList] = useState([]);
    const [newComuna, setNewComuna] = useState([props.dispatchComuna === "" ? { COMUNA: "Selecciona una región" }
            : { COMUNA: props.dispatchComuna }]);
    const [newRegin, setNewRegin] = useState([props.dispatchRegion === "" ? { value: "Selecciona una región" }
            : { value: props.dispatchRegion }]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios
            .get("https://1701336841.rsc.cdn77.org/json/regiones-comunas-elockers-matrix.json")
            .then((res) => {
            setRegionsList(res.data.regiones);
            res.data.regiones.map(item => {
                newRegin.push({ value: item.REGION });
            });
            setNewRegin(newRegin);
        })
            .then(() => {
            setLoaded(true);
        });
    }, []);
    const handleChange = (e) => {
        setNewComuna(regionsList.find((region) => region.REGION === e.target.value).COMUNAS);
        props.dispatch({
            type: "FormContent/setFormData",
            payload: {
                [regionName]: e.target.value,
                [comunaName]: regionsList.find((region) => region.REGION === e.target.value).COMUNAS[0].COMUNA
            }
        });
    };
    const handleChangeComunas = (e) => {
        props.dispatch({
            type: "FormContent/setFormData",
            payload: {
                [comunaName]: e.target.value
            }
        });
        props.dispatch({
            type: "ValidationContent/setValidationData",
            payload: {
                [comunaName]: true
            }
        });
    };
    return (React.createElement(FormAdress, null,
        (showparty === 0 || showparty === 1 || showparty === 2) && (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "select-title" }, "Regi\u00F3n"),
            React.createElement(InputSelect, { containerClassName: "full-width full-border", selectOptions: newRegin, handleChange: handleChange, iconClassName: disabledFields ? "disabled" : "", selectClassName: disabledFields ? "disabled" : "" }),
            React.createElement("p", { className: "select-title" }, "Comuna"),
            React.createElement(InputSelect, { containerClassName: "full-width full-border", selectOptions: newComuna, loaded: loaded, handleChange: handleChangeComunas, disabledFields: disabledFields, optionRender: (item, i) => {
                    let text = "Selecciona una región";
                    if (item.CON_DESPACHO || comunaName === "contractRegion") {
                        text = item.COMUNA;
                    }
                    else if (item.COMUNA === "Selecciona una región" || !item.COMUNA) {
                        text = "Selecciona una región";
                    }
                    else {
                        text = item.COMUNA + " - NO DISPONIBLE";
                    }
                    return React.createElement(ItemOption, { key: i, text: text, isEnabled: item.CON_DESPACHO, allAvailable: regionName === "contractRegion" ? true : false });
                } }))),
        (showparty === 0 || showparty === 1 || showparty === 2) && !!addressName && !!addressNumName && (React.createElement(React.Fragment, null,
            React.createElement(InputItem, Object.assign({}, props, { classAdd: "full-width", nameInput: addressName, iconInput: IconUbic, nameLabel: "Direcci\u00F3n", disabledFields: disabledFields, length: "50" })),
            React.createElement(InputItem, Object.assign({}, props, { classAdd: "full-width", nameInput: addressNumName,
                // iconInput={IconUbic}
                nameLabel: "Depto / oficina / otro", disabledFields: disabledFields, length: "50" }))))));
};
export default connect(({ FormContent }) => (Object.assign({}, FormContent)))(Step2Adress);
//# sourceMappingURL=Step2Address.js.map
