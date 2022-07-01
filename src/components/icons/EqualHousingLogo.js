import React from 'react'
import Icon from "./icon.svg";
import { css } from "@emotion/core"
const EqualHousingLogo = () => {
    return (
        <img src={Icon}
        alt="Equal Housing Logo"
        css={css`
        height: 64px;
        `}/>
    )
}

export default EqualHousingLogo
