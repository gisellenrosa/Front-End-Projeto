import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #fafafa;
  margin: 0;
  padding: 0;
  @media (min-width: 760px) {
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

export const FormContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  @media (min-width: 760px) {
    padding-top: 130px;
    padding-bottom: 90px;
  } ;
`;
