import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoWom from "@/images/logowom.svg";
import Transbank from "@/images/transbank.svg";
import IconFacebook from "@/images/icon_facebook.svg";
import IconTwitter from "@/images/icon_twitter.svg";
import IconYoutube from "@/images/icon_youtube.svg";
import IconInstagram from "@/images/icon_instagram.svg";
import IconPhoneOne from "@/images/ico_phone_one.svg";
import IconPhoneTwo from "@/images/ico_phone_two.svg";
import IconWhatsapp from "@/images/ico_whatsapp.svg";
const FooterWom = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2d1441;
  padding: 28px 15px;
  ul {
    li {
      font-size: 13px;
      line-height: 16px;
      color: #afa6b7;
      margin-bottom: 10px;
      list-style: none;
      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        padding-bottom: 5px;
        display: block;
      }
      &.social-links {
        max-width: 190px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a {
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      &.li-inline {
        display: flex;
        flex-direction: row;
        /* justify-content: flex-start; */
        align-items: center;
        picture {
          width: 23px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 5px;
        }
        span {
          padding: 0;
        }
      }
    }
  }
`;
const WrapperFooter = styled.div `
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;

    .contract {
      li {
        margin-bottom: 0;
      }
      .one {
        order: 1;
      }
      .two {
        order: 2;
      }
      .three {
        order: 5;
      }
      .four {
        order: 6;
        margin-bottom: 0;
      }
      .five {
        order: 3;
      }
      .six {
        order: 4;
        margin-bottom: 10px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        justify-content: center;
        align-self: center;
        text-align: center;
      }
      .bolder {
        font-weight: bold;
      }
      .li-inline {
        width: 200px;
        height: 40px;
        margin: 9px 0 16px !important;
        border: 1px solid #9a89a4;
        box-sizing: border-box;
        border-radius: 20px;
      }
      .social-links {
        width: 100%;
      }
    }
    div {
      width: 100%;
      max-width: 240px;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .logo-footer {
      display: blocK;
      margin: 0 auto;
    }
  }
`;
const Footer = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setShow(true);
        }
    }, []);
    return (React.createElement(FooterWom, null,
        React.createElement(WrapperFooter, null,
            React.createElement("div", null,
                React.createElement("img", { className: "logo-footer", src: LogoWom, alt: "wom footer" })),
            React.createElement("div", null,
                React.createElement("ul", { className: "contract" },
                    React.createElement("li", { className: "one" }, "A nuestro WhatsApp"),
                    React.createElement("li", { className: "li-inline two" },
                        React.createElement("picture", null,
                            React.createElement("img", { src: IconWhatsapp, alt: "whatsapp" })),
                        React.createElement("span", null, "+ 56 9 3522 3070")),
                    React.createElement("li", { className: "three" }, show
                        ? "Desde tu celular WOM marca:"
                        : "Marca desde tu celul"),
                    React.createElement("li", { className: "li-inline four" },
                        React.createElement("picture", null,
                            React.createElement("img", { src: IconPhoneOne, alt: "desde celular" })),
                        React.createElement("span", null, "103")),
                    React.createElement("li", { className: "five" }, show
                        ? "Fono clientes:"
                        : "Pórtate llamando al"),
                    React.createElement("li", { className: "li-inline six" },
                        React.createElement("picture", null,
                            React.createElement("img", { src: IconPhoneTwo, alt: "fono clientes" })),
                        React.createElement("span", null, "22 3377 600")))),
            React.createElement("div", null,
                React.createElement("ul", null,
                    React.createElement("li", { className: "bolder" }, "Paga con:"),
                    React.createElement("li", null,
                        React.createElement("img", { src: Transbank, alt: "tarjetas transbank" })),
                    React.createElement("li", { className: "bolder" }, "S\u00EDguenos en:"),
                    React.createElement("li", { className: "social-links" },
                        React.createElement("a", { href: "https://facebook.com/womchile", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement("img", { src: IconFacebook, alt: "facebook" })),
                        React.createElement("a", { href: "https://twitter.com/womchile", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement("img", { src: IconTwitter, alt: "twitter" })),
                        React.createElement("a", { href: "https://www.youtube.com/channel/UCPM0XXrP4i724aYt27QLBxA", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement("img", { src: IconYoutube, alt: "youtube" })),
                        React.createElement("a", { href: "https://instagram.com/womchile", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement("img", { src: IconInstagram, alt: "instagram" }))))))));
};
export default Footer;
//# sourceMappingURL=Footer.js.map