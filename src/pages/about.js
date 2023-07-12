import styled from "styled-components";
import imgLogo from "../picture/profile.png";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Body = styled.body `
  height: 100vh;
  width: 100vw;
  background: rgb(85,231,248);
  background: linear-gradient(90deg, rgba(85,231,248,1) 0%, rgba(133,121,236,1) 35%, rgba(209,194,249,1) 70%, rgba(85,231,248,1) 100%);
`;

const MainBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
`;

const PrivateBox = styled.div `
  display: flex;
  height: 42.5rem;
  width: 20rem;
  justify-content: center;
  align-items: center;
  div {
    padding: 2.5rem;
    background-color: white;
    border-radius: 1rem;
    height: 35rem;
    width: 20rem;
    margin-top: auto;
  }
  h1 {
    font-size: 2.5rem;
  }
`;

const Profile = styled.img `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.5rem;
  width: 12.5rem;
  margin: auto;
  border-radius: 500px;
  background-color: #d5d5d5;
`;

const PublicBox = styled.div `
  height: 42.5rem;
  width: 45rem;
  float: left;
  margin: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div `
  height: 35rem;
  width: 45rem;
  margin-top: auto;
  padding: 0.5rem;
  background-color: white;
  border-radius: 1rem;
`;

const TextBox1 = styled.div `
  height: 15rem;
  width: 20rem;
  margin: 1rem;
  float: left;
  background-color: #f0f0f0;
  border-radius: 1rem;
  padding: 0.5rem;
  h1 {
    height: 2.5rem;
    margin: auto;
    width: 17.5rem;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid black;
  }
  p {
    line-height: 1.25em;
    margin: 1rem;
    letter-spacing: 1px;
    font-size: 1.25rem;
  }
`;

const TextBox2 = styled.div `
  height: 15rem;
  width: 20rem;
  margin: 1rem;
  float: right;
  background-color: #f0f0f0;
  border-radius: 1rem;
  padding: 0.5rem;
  h1 {
    height: 2.5rem;
    margin: auto;
    width: 17.5rem;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid black;
  }
  p {
    line-height: 1.25em;
    margin: 1rem;
    letter-spacing: 1px;
    font-size: 1.25rem;
  }
`;

const TextBox3 = styled.div `
  height: 15rem;
  width: 20rem;
  margin: 1rem;
  float: left;
  background-color: #f0f0f0;
  border-radius: 1rem;
  padding: 0.5rem;
  h1 {
    height: 2.5rem;
    margin: auto;
    width: 17.5rem;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid black;
  }
  p {
    line-height: 1em;
    margin: 1rem;
    letter-spacing: 1px;
    font-size: 1.25rem;
  }
`;

const TextBox4 = styled.div `
  height: 15rem;
  width: 20rem;
  margin: 1rem;
  float: right;
  background-color: #f0f0f0;
  border-radius: 1rem;
  padding: 0.5rem;
  h1 {
    height: 2.5rem;
    margin: auto;
    width: 17.5rem;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid black;
  }
  p {
    line-height: 1em;
    margin: 1rem;
    letter-spacing: 1px;
    font-size: 1.25rem;
  }
`;

const About = () => {
  return (
    <Body>
      <MainBox>
        <PrivateBox>
          <div>
            <Profile src={imgLogo} alt="logo image" />
            <h1>Lee Jahyeon</h1><br/><br/>
            <FontAwesomeIcon icon={faPhone} style={{color: "#000000"}} />
            <h3>010-7476-3869</h3><br/>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} />
            <h3>ij184399@gmail.com</h3><br/>
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} />
            <h3>Korea Busan</h3>
          </div>
        </PrivateBox>
        <PublicBox>
          <InfoBox>
            <TextBox1>
              <h1>Profile</h1>
              <p>성별: 남<br/>
              생년월일: 2007/06/01<br/>
              mbti: INTJ<br/>
              장점: 좋아하는 것은 많이 한다<br/> 
              단점: 관심이 없으면 안 한다</p>
            </TextBox1>
            <TextBox2>
              <h1>Story</h1>
              <p>
              저는 중학교 때 파이썬과 Ai, 딥러닝, 머신러닝에 대해서 알게 되었습니다. 
              프로그래밍이 재밌고 계속 관심이 가던 도중에 이 학교를 알게 되어서 지원을 해서 들어왔습니다.
              </p>
            </TextBox2>
            <TextBox3>
              <h1>Interesting</h1>
              <p>
                좋아하는 것: 프로그래밍, 전공 공부, 게임 등<br/><br/>
                싫은 것: 엄...귀찮은 것?<br/><br/>
                흥미있는 것: 프로그래밍, IT 관련 지식 등
              </p>
            </TextBox3>
            <TextBox4>
              <h1>Career</h1>
              <p>임호초등학교 졸업</p>
              <p>임호중등학교 졸업</p>
              <p>부산 소프트웨어 마이스터고 재학 중</p>
            </TextBox4>
          </InfoBox>
        </PublicBox>
      </MainBox>
    </Body>
  );
};

export default About;