import React, { useState } from "react";
import { Sketch } from "react-p5";

const JaiCloudAnimation = () => {
  const [lightningOpacity, setLightningOpacity] = useState(0);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 600).parent(canvasParentRef);
    p5.frameRate(60);
    p5.angleMode(p5.DEGREES);
    p5.smooth();
  };

  const draw = (p5) => {
    p5.background(68, 69, 69);

    if (p5.random() < 0.01) {
      p5.background(255);
      setLightningOpacity(240);
      generateLightning(p5);
    }

    setLightningOpacity(p5.constrain(lightningOpacity - 3, 0, 255));

    drawLightning(p5);
    drawCat(p5);
    if (lightningOpacity > 0) {
      drawCatShadow(p5, lightningOpacity);
    }

    // Ground
    p5.stroke(50, 50, 50, 100);
    p5.strokeWeight(2);
    p5.fill(87, 89, 89);
    p5.rect(0, 516, p5.width, 85);

    // Rain
    runRain(p5);
  };

  const generateLightning = (p5) => {
    // Logic for generating lightning
  };

  const drawLightning = (p5) => {
    // Logic for drawing lightning
  };

  const drawCat = (p5) => {
    // Logic for drawing cat
  };

  const drawCatShadow = (p5, opacity) => {
    // Logic for drawing cat shadow
  };

  const runRain = (p5) => {
    // Logic for running rain
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default JaiCloudAnimation;
