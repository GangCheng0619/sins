import { Grid } from "@material-ui/core";
import React from "react";

function Main2() {
  return (
    <div>
      <div className="intro">
        <div>Welcome to $SINner</div>
        <div>Let's mint some Nodes to start your passive income journey!</div>
        <div>Pending Rewards: {} $sin</div>
      </div>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item sm={10}>
          <div className="subgrid">
            <div>Tier: Demon</div>
            <div>Reward Rate: {} $SIN/Day</div>
            <div>Price: {}$SIN</div>
            <div>ROI: {} Days</div>
            <div className="mintbtn">Mint with Rewards (10% discount)</div>
            <div className="approvebtn">Approve</div>
          </div>
        </Grid>
        <Grid item sm={5}>
          <div className="subgrid">
            <div>Tier: Demon</div>
            <div>Reward Rate: {} $SIN/Day</div>
            <div>Price: {}$SIN</div>
            <div>ROI: {} Days</div>
            <div className="mintbtn">Mint with Rewards (10% discount)</div>
            <div className="approvebtn">Approve</div>
          </div>
        </Grid>
        <Grid item sm={5}>
          <div className="subgrid">
            <div>Tier: Demon</div>
            <div>Reward Rate: {} $SIN/Day</div>
            <div>Price: {}$SIN</div>
            <div>ROI: {} Days</div>
            <div className="mintbtn">Mint with Rewards (10% discount)</div>
            <div className="approvebtn">Approve</div>
          </div>
        </Grid>
        <Grid item sm={5}>
          <div className="subgrid">
            <div>Tier: Demon</div>
            <div>Reward Rate: {} $SIN/Day</div>
            <div>Price: {}$SIN</div>
            <div>ROI: {} Days</div>
            <div className="mintbtn">Mint with Rewards (10% discount)</div>
            <div className="approvebtn">Approve</div>
          </div>
        </Grid>
        <Grid item sm={5}>
          <div className="subgrid">
            <div>Tier: Demon</div>
            <div>Reward Rate: {} $SIN/Day</div>
            <div>Price: {}$SIN</div>
            <div>ROI: {} Days</div>
            <div className="mintbtn">Mint with Rewards (10% discount)</div>
            <div className="approvebtn">Approve</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main2;
