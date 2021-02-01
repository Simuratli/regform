import styled from "styled-components";

export const AddonsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${() =>
    `url(${require("../../assets/images/addon_full_page_header_bg.svg")}) no-repeat center`};
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 75px 20px;
  margin: 60px 0 0 0;

  .addons-cont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #fff;
    margin: 20px 0;
  }

  .addon-card {
    margin: 30px;
    min-width: 360px;
    max-width: 360px;
  }
`;
