import Card from "./card";
import styled from "styled-components";

const Wrapper = styled.div`
  
  box-sizing: border-box;

  width: 100%;
  height: 100vh;

  padding: 0 10%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
background-color: #f1c40f;
font-size: 2rem;
font-weigh: 600;
width: 100%;
`;

const Subtitle = styled.div`
font-size: 1.5rem;
font-weigh: 600;`

function App() {
  return (
    <Wrapper>
      <Title> ~ 한줄요약 ~</Title>
      <Subtitle>대충 부제목이라는 뜻</Subtitle>
      <Card subj = "안녕하세요" desc = "반갑습니다"/>
      <Card subj = "안녕하세요1" desc = "1반갑습니다"/>
      <Card subj = "안녕하세요2" desc = "2반갑습니다"/>
      <Card subj = "안녕하세요3" desc = "3반갑습니다"/>
  </Wrapper>
)
}

export default App;
