import React from "react";
// import Hello from "./Hello";
import { Parallax } from "react-parallax";
//import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import AutoGrid from "../components/AutoGrid";
//import { responsiveFontSizes } from "@material-ui/core/styles";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const whiteSpaceStylesSm = {
  background: "#eeeeee",
  height: "200px",
  fontFamily: "sans-serif",
  textAlign: "center",
};
const whiteSpaceStyles = {
  background: "#eeeeee",
  height: "500px",
  fontFamily: "sans-serif",
  textAlign: "center",
};
const buttonStyles = {
  minWidth: "200px",
  background: "darkorange",
  color: "white",
  padding: 20,
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-10%)"
};
const insideStyles = {
  background: "",
  color: "white",
  padding: 20,
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const insideStylesText = {
  fontSize: "100px"
}
const image4 =
  "https://imgur.com/QDqNBHL.jpg";
const image2 =
  "https://i.imgur.com/vWxQTV0.jpg";
const image3 =
  "https://i.imgur.com/Q8r8SHj.jpg";
const image1 =
  "https://i.imgur.com/Ldkenos.jpg";

function ParallaxPage(){
  return(
    <div style={styles}>
      {/* <Hello name ="Trade Hub"/> */}
      <Parallax bgImage={image1} strength={600}>
        <div style={{ height: 650 }}>
          <div style={insideStyles}>
            <h1><b>TRADE HUB</b></h1>
            <br/>
            <h4>is</h4>
            <br/>
            <h4>a transaction platform for collectors, traders, buyers and sellers. </h4>
            <br></br>
            <Button><div style={buttonStyles}>  Start Trading  </div></Button>
          </div>
        </div>
      </Parallax>
      <div style={whiteSpaceStylesSm}>
        <br/><br/>
        <h5>Search our existing trade groups and TRADE ON.</h5>
        <h5>Didn't find anything? Create your own group with your friends.</h5>
        <h5>We have the trading frame work and ledger. You tell us what you want to trade.</h5>
      </div>
      <div style={whiteSpaceStyles}>
        <AutoGrid/>
      </div>
        
      <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <p style = {insideStylesText}>Collectors</p>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <p style = {insideStylesText}>Sellers</p>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <p style = {insideStylesText}>Buyers</p>
          </div>
        </div>
      </Parallax>
      <div style={{ height: 500 }} />
      <h2>{"\u2728"}</h2>
    </div>
  );
}
export default ParallaxPage;
