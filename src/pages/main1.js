import React from "react";
import { Grid } from "@material-ui/core";
function Main1() {
  return (
    <div className="allgrid">
      <Grid container spacing={4} justifyContent="center">
        <Grid item className="grid" lg={5} xs={10} sm={6}>
          <div className="subgrid">SIN Price</div>
        </Grid>
        <Grid item className="grid" lg={5} xs={10} sm={6}>
          <div className="subgrid">Market Cap</div>
        </Grid>
        <Grid item className="grid" lg={5} xs={10} sm={6}>
          <div className="subgrid">Total Nodes</div>
        </Grid>
        <Grid item className="grid" lg={5} xs={10} sm={6}>
          <div className="subgrid">Tokens In Reward Pool</div>
        </Grid>
        <Grid item className="grid" lg={10} xs={10} sm={12}>
          <div className="subgrid">Treasury Balance</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main1;
