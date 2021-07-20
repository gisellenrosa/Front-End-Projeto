import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #fafafa;
  margin: 0;
  padding: 0;
  @media (min-width: 760px) {
  } ;
`;
export const ButtonContent = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;

  @media (min-width: 760px) {
    padding-top: 130px;
    padding-bottom: 90px;
  } ;
`;
export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 760px) {
  } ;
`;
export const AuthorInfo = styled.div`
  display: flex;
  padding: 10px;
  @media (min-width: 760px) {
    background-color: white;
    border: 1px solid #e7e7e7;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
  } ;
`;
export const NickInfo = styled.p`
  margin-left: 10px;
  font-weight: 500;
  @media (min-width: 760px) {
  } ;
`;
export const AvatarImg = styled.img`
  border: 1px solid #e7e7e7;
  border-radius: 50%;
  height: 40px;
  @media (min-width: 760px) {
    height: 50px;
  } ;
`;
export const PostImg = styled.img`
  width: 100vw;
  height: 300px;
  @media (min-width: 760px) {
    width: 550px;
    height: 450px;
  } ;
`;
export const PostInfo = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 0 100px 0;

  @media (min-width: 760px) {
    background-color: white;
    border: 1px solid #e7e7e7;
    border-top: 0;
    border-radius: 3px 3px 0 0;
  } ;
`;
