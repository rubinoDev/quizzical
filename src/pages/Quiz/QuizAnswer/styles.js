import styled from "styled-components";

export const QuizAnswerContainer = styled.div`
  
  width: 100%;

  .answer-btn{
    border: 1px solid #4D5B9E;
    border-radius: 1rem;
    background-color: transparent;
    color: #293264;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.5rem;

    padding: 1rem;

    min-width:8rem;

    cursor: pointer;

    &:hover{
      background-color: #D8E8EE;;
    }

    &.held{
      background: #D6DBF5;
    }

  }

  ul{
    display: flex;
  gap:1.6rem;
  flex-direction: row;
  }
  .answer-item{
    list-style: none;
  }
`