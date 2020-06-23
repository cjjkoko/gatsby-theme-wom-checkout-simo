import React from "react";
import styled from "styled-components";
const Option = styled.option `
  &.disabled {
    color: #d6d6d6;
  }
`;
const ItemOption = ({ text, isEnabled = true, allAvailable }) => {
    if (allAvailable) {
        return React.createElement(Option, { value: text }, text);
    }
    else {
        return (React.createElement(Option, { value: text, disabled: !isEnabled, className: isEnabled ? "" : "disabled" }, text));
    }
};
export default ItemOption;
//# sourceMappingURL=ItemOption.js.map