import React, { useEffect, useState } from "react";
import axios from "axios";
import PickupStore from "./PickupStore";
import ChooseReceiptType from "./ChooseReceiptType";
import { connect } from "react-redux";
const Step2 = (props) => {
    const formData = props;
    const [regioneComunasList, setRegioneComunasList] = useState({});
    useEffect(() => {
        axios
            .get("https://1701336841.rsc.cdn77.org/json/regiones-comunas-elockers-matrix.json")
            .then((res) => {
            setRegioneComunasList(res.data);
        });
    }, regioneComunasList);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [formData.storeInfo]);
    const setValidationData = (payload) => {
        return props.dispatch({
            type: "ValidationContent/setValidationData",
            payload
        });
    };
    const setFormData = (payload) => {
        return props.dispatch({
            type: "FormContent/setFormData",
            payload
        });
    };
    return (React.createElement(React.Fragment, null, Object.keys(formData.storeInfo).length === 0 ? (React.createElement(ChooseReceiptType, Object.assign({}, props, { setValidationData: setValidationData, setFormData: setFormData, regioneComunasList: regioneComunasList }))) : (React.createElement(PickupStore, Object.assign({}, props, { setValidationData: setValidationData, setFormData: setFormData, store: formData.storeInfo })))));
};
export default connect(({ FormContent, ValidationContent }) => (Object.assign(Object.assign({}, FormContent), ValidationContent)))(Step2);
//# sourceMappingURL=Step2.js.map