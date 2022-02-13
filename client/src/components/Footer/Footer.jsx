import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
        <h3>Partenaires à la réalisation</h3>
          <p>
            Partenaires pouvant aider à la réalisation du projet (il est
            important pour moi que les citoyens sans-papiers ayant les
            compétences et souhaitant s’impliquer, puissent le faire, tout en
            essayant de leur permettre de recevoir une rémunération pour leur
            travail). De plus, étant actifs dans de nombreux lieux militants,
            ils seront heureux de proposer l’exposition du travail dans ces
            espaces.
          </p>
      
        </div>
        <div className="about container">
          <div className="title">
            <h3>Partenaires éventuels</h3>
          </div>
          <p>Collectif d’artistes Bruxellois PTTL</p>
          <p>SOS Migrants</p>
          <p>Point Culture Bruxelles</p>
          <p>Les meutes (Festival des Blockx)</p>
          <p>Pigment asbl</p>
          <p>Douche Flux</p>
          <p>Chez Rosi (imprimerie Riso)</p>
          <p>Medex</p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Partenaires sur ce projet</h3>
          </div>
          <p>Globe Aroma</p>
          <p>Centres culturels des diﬀérentes communes</p>
          <p>Le chant des rues</p>
          <p>Inter Environnement Bruxelles</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2022 <span>Thierno</span>
        </h2>
      </LowerFooter>
    </div>
  );
};

const Section = styled.footer`
  margin: 0;
  background: #ffffff;
  color: #000000;
  filter: brightness(95%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 25px 12vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }

  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    padding: 8vw;
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;

export default Footer;
