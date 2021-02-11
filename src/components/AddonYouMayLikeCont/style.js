import styled from "styled-components";

export const AddonsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${() =>
    `#383680  url(${require("../../assets/images/you-may-also-like.png")}) no-repeat top center`};
  justify-content: center;
  align-items: center;
  padding: 0 0 6% 0;
  background-size: inherit;
  max-width: 4000px;
  margin: 0 auto;

  .addons-cont {
    width: 80%;
    max-width: 1340px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }

  .left-btn {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
  }

  .right-btn {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }

  .title {
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #fff;
    margin: 20% 0 20px 0;
  }

  .addon-card {
    margin: 30px;
    min-width: 350px;
    max-width: 360px;
    max-height: 470px;
    overflow: auto;
  }

  .addonsCard {
    padding: 0 25px !important;
  }

  .addonsCard .cardDescription {
    top: 2.5rem;
    max-height: 140px;
    overflow: auto;
  }

  .addonsCard .cardSubTitle {
    margin: 35px 0 0 0;
    top: 13rem;
  }

  .btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid #fff;
    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: none;
    }
  }

  .addonsCard .cardsButtons .downloadButton {
    margin: 0;
  }

  @media (max-width: 1400px) {
    .left-btn {
      left: 5%;
    }

    .right-btn {
      right: 5%;
    }
  }


  @media (max-width: 1250px) {
    .left-btn {
      left: -10%;
    }

    .right-btn {
      right: -10%;
    }
  }

  @media (max-width: 1000px) {
    .title {
      margin: 20% 0 20px 0;
    }
  }

  @media (max-width: 760px) {
    .title {
      margin: 30% 0 20px 0;
    }
  }

  @media (max-width: 400px) {
    .addon-card {
      margin: 30px 10px;
      min-width: 330px;
      max-width: 330px;
    }
  }
  .title {
    font-size: 24px;
  }
`;
