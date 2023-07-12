import styled from "styled-components";
import JsImg from "../picture/JS.png";
import ReactImg from "../picture/react.png";
import NodeJsImg from "../picture/nodejs.png";
import PythonImg from "../picture/python.png";

const Body = styled.body `
  height: 100vh;
  width: 100vw;
  background: rgb(255,95,160);
  background: linear-gradient(90deg, rgba(255,95,160,1) 0%, rgba(121,185,242,1) 30%, rgba(252,181,248,1) 60%, rgba(57,245,222,1) 100%);
`;

const MainBox = styled.div `
  display: flex;
  margin: 0 3.7rem;
  padding: 6rem 0 0 0;
  height: 100vh;
  width: 95vw;
`;

const Subject = styled.div `
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 35rem;
  width: 27.5rem;
  background-color: white;
  border-radius: 1rem;
  h1 {
    padding: 0.5rem;
    width: 27.5rem;
    height: 3.5rem;
    border-bottom: 0.1rem solid black;
  }
  h2 {
    margin: 1rem;
    font-size: 2.5rem;
  }
`;

const JsImage = styled.img `
  width: 7.5rem;
  height: 7.5rem;
  margin: 2rem 2.5rem;
  align-self: flex-start;
`;

const ReactImage = styled.img `
  height: 7.5rem;
  width: 15rem;
  margin: 2rem 2.5rem;
  align-self: flex-end;
`;

const NodejsImage = styled.img `
  height: 8rem;
  width: 15.5rem;
  margin: 2rem 2.5rem;
  align-self: flex-end;
`;

const PythonImage = styled.img `
  width: 20rem;
  height: 6rem;
  margin: 2rem 2.5rem;
  align-self: flex-start;
`;

const Stack = () => {
  return (
    <Body>
      <MainBox>
        <Subject>
          <h1>프론트 엔드</h1>
          <JsImage src={ JsImg } alt="logo image" />
          <ReactImage src={ ReactImg } alt="logo image" />
        </Subject>
        <Subject>
          <h1>백 엔드</h1>
          <PythonImage src={ PythonImg } alt="logo image" />
          <NodejsImage src={ NodeJsImg } alt="logo image" />
        </Subject>
        <Subject>
          <h1>보안(공부 중)</h1>
          <h2>시스템 해킹</h2>
          <h2>웹 해킹</h2>
          <h2>네트워크</h2>
        </Subject>
      </MainBox>
    </Body>
  );
};

export default Stack;