import { Grid } from "@material-ui/core";
import "../../App.css";
import React from "react";
import icon1 from "../../assests/imgs/icon-1.svg";
import icon2 from "../../assests/imgs/icon-2.svg";
import icon3 from "../../assests/imgs/icon-3.svg";
import icon4 from "../../assests/imgs/icon-4.svg";
import icon5 from "../../assests/imgs/icon-5.svg";

export default function Footer() {
  return (
    <>
      <ul className="bottom-icons">
        <li>
          <a href="https://github.com/sins-finance" target="_blank">
            <img src={icon1} />
          </a>
        </li>
        <li>
          <a href="https://t.me/SinsFinancePortal" target="_blank">
            <img src={icon2} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Sins_Finance" target="_blank">
            <img src={icon3} />
          </a>
        </li>
        <li>
          <a href="https://docs.sins.finance/sinswhitepaper/" target="_blank">
            <img src={icon4} />
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/sins-finance" target="_blank">
            <img src={icon5} />
          </a>
        </li>
      </ul>
    </>
  );
}
