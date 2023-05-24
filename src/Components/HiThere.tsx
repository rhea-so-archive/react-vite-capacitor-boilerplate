import React from "react";
import styled from "styled-components";

const BigText = styled.div`
  * {
    box-sizing: border-box;
  }

  .container {
    width: 400px;
    height: 300px;
    color: #494949;
  }

  .container > * {
    margin: 20px auto;
  }

  h1 {
    text-align: center;
    font-size: 3em;
    font-weight: 700;
  }

  p {
    text-align: center;
  }

  p a {
    color: #199697;
    font-weight: 700;
  }
`;

export default function HiThere() {
  return (
    <>
      <BigText>
        <h1>
          👋
          <br />
          Hello, World!
        </h1>
        <br />
        <p>
          <a
            href="https://github.com/rhea-so-lab/react-vite-capacitor-boilerplate"
            target="_blank"
          >
            React + Vite + Capacitor Boilerplate
          </a>
        </p>
        <br />
        <p>
          Created by{" "}
          <a href="https://github.com/rhea-so" target="_blank">
            rhea-so
          </a>
        </p>
      </BigText>
    </>
  );
}
