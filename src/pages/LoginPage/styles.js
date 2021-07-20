import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  @media (min-width: 760px) {
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  } ;
`;
export const LoginContent = styled.div`
  @media (min-width: 760px) {
    margin-top: 80px;
    background-color: white;
    border: 1px solid #dbdbdb;
    padding-bottom: 30px;
    width: 400px;
  } ;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  margin: 4px 40px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 12px 0 12px 5px;
  font-size: 12px;
  color: black;
  :focus {
    border: 1px solid #a2a8b0;
  }
`;
export const Button = styled.button`
  flex: 1;
  margin: 10px 40px;
  padding: 8px 0;
  border-radius: 3px;
  border: none;
  background-color: #2f95f6;
  color: white;
  font-size: 14.5px;
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #0f95f6;
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-family: "Insta";
  font-size: 36px;
  color: #262626;
  @media (min-width: 760px) {
    margin-top: 20px;
  } ;
`;

export const DevelopedBy = styled.p`
  margin-top: 120px;
  text-align: center;
  font-family: "Face";
  color: #262626;
  @media (min-width: 760px) {
    margin-top: 40px;
  } ;
`;

export const Link = styled.a`
  color: #3294e8;
  font-weight: bold;
  cursor: pointer;
`;
export const SignUpContent = styled.div`
  @media (min-width: 760px) {
    background-color: white;
    border: 1px solid #dbdbdb;
    padding-bottom: 20px;
    width: 400px;
  } ;
`;
export const SignUpText = styled.p`
  margin-top: 40px;
  text-align: center;
  color: #262626;
  font-size: 16px;
`;
