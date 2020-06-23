import * as React from "react";
import InputSelect from 'gatsby-theme-core/src/components/InputSelect';
import './InputSelect.scss';
const inputSelect = (props) => {
    return React.createElement("div", null,
        "simo",
        React.createElement(InputSelect, Object.assign({ containerClassName: 'containerClassName' }, props)));
};
export default inputSelect;
//# sourceMappingURL=InputSelect.js.map