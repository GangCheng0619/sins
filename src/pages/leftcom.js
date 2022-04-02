import React from "react";
import home from "../assests/imgs/home.svg";
import mint from "../assests/imgs/mint.svg";
import node from "../assests/imgs/node.svg";
import docs from "../assests/imgs/docs.svg";
function Leftcom() {
  return (
    <div className="repo">
      <div className="leftdown">
        <div className="cont">
          <a>
            <img src={home} />
            <div>Home</div>
          </a>
        </div>
        <div className="cont">
          <a>
            <img src={mint} />
            <div>Mint Nodes</div>
          </a>
        </div>
        <div className="cont">
          <a>
            <img src={node} />
            <div>My nodes</div>
          </a>
        </div>
        <div className="cont">
          <a>
            <img src={docs} />
            <div>Docs</div>
          </a>
        </div>
        <div className="cont">
          <a>
            <img />
            <div>Twitter</div>
          </a>
        </div>
        <div className="cont">
          <a>
            <img />
            <div>Telegram</div>
          </a>
        </div>
        <div className="cont">
          <a>
            <img />
            <div>Discord</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leftcom;
