import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: white;
  margin: 0;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  top: 0;
  z-index: 1;
  @media (min-width: 760px) {
  } ;
`;
export const Logo = styled.h1`
  margin: 20px;
  padding: 0px;
  margin-top: 8px;
  text-align: center;
  font-family: "Insta";
  font-size: 20px;
  color: #262626;
  @media (min-width: 760px) {
    margin-left: 15vh;
    font-size: 23px;
    margin-top: 5px;
  } ;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  border: 1px solid #e7e7e7;
  width: 40px;
  @media (min-width: 760px) {
  } ;
`;
