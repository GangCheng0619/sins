import React from "react";
import { Grid } from "@material-ui/core";

function Main3() {
  return (
    <div>
      <div className="intro">
        <div>DashBoard</div>
      </div>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item sm={10}>
          <div className="subgrid">
            <div>Total Nodes: {}</div>
            <div>Inactive: {} Nodes</div>
            <div>Pending Fee: {}$AVAX</div>
            <div className="mintbtn">Pay Maintenance Fee</div>
          </div>
        </Grid>
        <Grid item sm={10}>
          <div className="subgrid">
            <div>Pending Rewards: {} $SIN</div>
            <div>USD value: {}USD</div>
            <div>Current Claim Tax: {} %</div>
            <div className="mintbtn">Mint with Rewards (10% discount)</div>
            <div className="btngrp">
              <div className="mintbtn">Stake Rewards(1 Month)</div>
              <div className="mintbtn">Stake Rewards(3 Month)</div>
              <div className="mintbtn">Stake Rewards(6 Month)</div>
              <div className="mintbtn">Stake Rewards(9 Month)</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main3;
