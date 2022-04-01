import React from "react";
import { Grid, Container } from "@material-ui/core";
import "../App.css";
import Header from "../component/layouts/header";
import Footer from "../component/layouts/footer";

function Homepage() {
  return (
    <>
      <Header />
      <div className="main-bg wow fadeIn" data-wow-delay="1.1s"></div>
      <Container className="">
        <div className="wrapper position-relative">
          <Grid container className="inner-wrapper" justifyContent="">
            <Grid item ls={9} sm={12}>
              <h1>
                Welcome to Sins! The treasury backed wealth creation protocol
                with Nodes.
              </h1>
              <p>
                We are constructing a truly decentralized financial
                infrastructure to bring steadiness and transparency to the
                world.{" "}
              </p>
            </Grid>
            <Grid item md={12} className="block">
              <a
                href="https://app.sins.finance/#/"
                title="Enter App"
                class="btn btn-primary animation"
                target="_blank"
              >
                Enter App
              </a>
              <a
                href="https://traderjoexyz.com/trade?outputCurrency=0x23ba4272A5c5b5641c751521d57E3413C6703131#/"
                title="Buy on Trader Joe"
                class="btn btn-primary animation"
                target="_blank"
              >
                Buy on Trader Joe
              </a>
              <a
                href="https://docs.sins.finance/sinswhitepaper/"
                title="Whitepaper"
                class="btn btn-primary animation"
                target="_blank"
              >
                Whitepaper
              </a>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Homepage;
