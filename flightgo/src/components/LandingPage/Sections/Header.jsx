import React from "react";
import styled from "styled-components";
import '../landingPage.css'

export default function Header() {
  return (
    <div className="bg-header">
    <Wrapper id="home" className=" container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Book With Us and Ready to Take Off</h1>
          <HeaderP className="font20 semiBold">
          Explore the world by booking flight with us and get your best experience
          </HeaderP>
        </div>
      </LeftSide>
      
      
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 20px;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
