import styled from "styled-components";

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5rem;

  max-width: 90%;
  
  .check-btn{
      z-index: 1;
  
      margin: 0 auto;
      margin-top: 2rem;
      padding: 2rem ;
  
      border: none;
  
      background: #4D5B9E;
      border-radius: 1rem;  
      
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
  
      color: #F5F7FB;
  
      cursor: pointer;
  
      &:hover{
        filter: brightness(0.9);
      }

      &.disabled{
        opacity: 0.7;
        cursor: not-allowed;
      }
  }
`