import styled from "styled-components";

export const QuizBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Karla';
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.37rem;
  color: #293264;

  z-index: 1;

  width: 100%;

  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.794239px solid #DBDEF0;

  .quizBox__question{
    padding-bottom: 0.8rem;
  }
`