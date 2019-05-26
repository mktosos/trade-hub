import React from "react";
// import Hello from "./Hello";
import { Parallax } from "react-parallax";
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import AutoGrid from "../components/AutoGrid";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const whiteSpaceStyles = {
  background: "#eeeeee",
  height: "1000px",
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
  transform: "translate(-50%,-50%)"
};
const image3 =
  "https://imgur.com/QDqNBHL.jpg";
const image2 =
"https://i.imgur.com/Q8r8SHj.jpg";

const image4 =
"https://i.imgur.com/vWxQTV0.jpg";
const image1 =
  "https://i.imgur.com/Ldkenos.jpg";

function ParallaxPage(){
  return(
    <div style={styles}>
      {/* <Hello name ="Trade Hub"/> */}
      <Parallax bgImage={image1} strength={600}>
        <div style={{ height: 650 }}>
          <div style={insideStyles}>
            <h1><b>THE CART & DISC</b></h1>
            <br></br>
            <br></br>
            <h4>Trade all things video games. A trade pool for physical media - cartridge and disc based games.</h4>
            <br></br>
            <Button><div style={buttonStyles}>  TRADE  </div></Button>
            
          </div>
        </div>
      </Parallax>
      <div style={whiteSpaceStyles}>
      <AutoGrid>
        
      </AutoGrid>
      </div>
      <Container fixed>
        <h5>lorem ipsum  </h5>
      </Container>  
      <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Dynamic Blur</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Reverse direction</div>
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
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
      <div style={{ height: 500 }} />
      <h2>{"\u2728"}</h2>
    </div>
  );
}
export default ParallaxPage;
