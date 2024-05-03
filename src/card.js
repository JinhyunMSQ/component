import styled from "styled-components";

const Wrapper = styled.div`
margin: 10px 0;

width: 100%;
heigh: 100px;

border: 5px solid yellowgreen;
border-radius: 10px;

display: flex;
flex-direction: column;
justify-content: space-around;
`;

const Subj = styled.div`
    font-size:1.5rem;
`;

const Desc = styled.div`
    font-size:1.5rem;
`;

const Card = ({subj, desc}) => {
    return (
        <Wrapper>
            <div>{subj}</div>
            <div>❤️{desc}</div>
        </Wrapper>
    )
}

export default Card;