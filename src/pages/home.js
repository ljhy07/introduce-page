import styled from "styled-components";
import imgLogo from "../picture/profile.png";

const Body = styled.body `
  height: 100vh;
  width: 100vw;
  background: rgb(255,95,160);
  background: linear-gradient(90deg, rgba(255,95,160,1) 0%, rgba(121,185,242,1) 30%, rgba(252,181,248,1) 60%, rgba(57,245,222,1) 100%);
`;

const TextBox = styled.div `
  width: 100vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: end;
  h1 {
    font-size: 3.5rem;
    color: white;
    white-space: pre-line;
    font-weight: bold;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

const ImgBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100vw;
  img {
    height: 35vh;
    width; 25vw;
  }
`;

const Home = () => {
  return (
    <Body>
      <TextBox>
        <h1>안녕하세요!<br/>제 이름은 이재현입니다.<br/>저는 풀스택 개발자가 되고 싶습니다.</h1>
      </TextBox>
      <ImgBox>
        <img src={imgLogo} alt="logo image"></img>
      </ImgBox>
    </Body>
  );
};

export default Home;