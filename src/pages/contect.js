import styled from "styled-components";
import GithubImg from "../picture/github.svg";
import InstaImg from "../picture/instagram.svg";
import VelogImg from "../picture/velog.png";
import NotionImg from "../picture/notion.png";

const Body = styled.body `
  height: 100vh;
  width: 100vw;
  padding: 12.5rem;
  background: rgb(85,231,248);
  background: linear-gradient(90deg, rgba(85,231,248,1) 0%, rgba(133,121,236,1) 35%, rgba(209,194,249,1) 70%, rgba(85,231,248,1) 100%);
`;

const IconBox = styled.div`
  display: flex;
  margin: auto;
  width: 60rem;
  height: 50vh;
  padding: 5rem 2.5rem;
  background-color: white;
  border-radius: 1rem;
  img {
    height: 10rem;
    width: 10rem;
    margin: 0 2rem;
  }
  a {
    text-decoration-line: none;
    color: black;
  }
`;

const Contect = () => {
  return (
    <Body>
      <IconBox>
        <a href="https://github.com/ljhy07" target="blank">
          <img src={ GithubImg } alt="logo image" />
          <h3>ljhy07</h3>
        </a>
        <a href="https://www.instagram.com/leejhyeon_07/" target="blank">
          <img src={ InstaImg } alt="logo image" />
          <h3>leejhyeon_07</h3>
        </a>
        <a href="https://velog.io/@ljhy07" target="blank">
          <img src={ VelogImg } alt="logo image" />
          <h3>ljhy07</h3>
        </a>
        <a href="https://www.notion.so/ljhy-s-Main-page-9bc33b4b0cd64deda85db3bede3a0c9f" target="blank">
          <img src={ NotionImg } alt="logo image" />
          <h3>ljhy</h3>
        </a>
      </IconBox>
    </Body>
  );
};

export default Contect;