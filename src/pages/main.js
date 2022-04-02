import React from "react";
import MainHeader from "../component/layouts/mainheader";
import MainFooter from "../component/layouts/mainfooter";
import Leftcom from "./leftcom";
import Main1 from "./main1";
import Main2 from "./main2";
import { Grid } from "@material-ui/core";
import Main3 from "./main3";
function Main() {
  return (
    <>
      <MainHeader />
      <Grid container className="center">
        <Grid item sm={2} className="hamgrid">
          <Leftcom />
        </Grid>
        <Grid item sm={9} className="contentgrid">
          {/* <Main1 /> */}
          {/* <Main2 /> */}
          <Main3 />
        </Grid>
      </Grid>
      <MainFooter />
    </>
  );
}
export default Main;
