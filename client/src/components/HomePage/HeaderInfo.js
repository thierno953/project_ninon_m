import React from "react";
import styled from "styled-components";
// import heroDesign from "../../assets/phone-features.png";

const HeaderInfo = ({ item }) => {
  return (
    <Section id="home">
      <div className="background">
        <div></div>
      </div>
      <div className="content">
     {/*    <div className="sale">
          <img src={heroDesign} alt="" />
        </div> */}
        <div className="info">
          <h2>{item.title}</h2>
          <em>{item.description}</em>
          <button>+32 1234567890</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  height: 50vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    div {
      background: #ffffff;
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(95%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .info {
      
      display: flex;
      align-item: center;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      margin: 0 10px;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: #000000;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 100%;
        }
      }
    }
  }
`;

export default HeaderInfo;
