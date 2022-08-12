import styled, { css } from "styled-components";

export const QuizContainer = styled.div`
  opacity: 0;
  ${props =>
    props.isTimeToShowQuizBox &&
    css`
      opacity: 1;
    `}
  transition: opacity ease-in-out 500ms;

  display: flex;
  flex-direction: column;

  padding: 5rem;

  max-width: 90%;
  
  .container-check-score{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding-inline:3rem ;
    .container-button-score{
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    .score{
      display: none;
    }
    .score.active{
      display: block;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.3rem;
      text-align: center;

      padding-top: 1.5rem;

      color: #293264;

      z-index: 1000;
    }
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
    .play-again-btn{
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
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;

    color: #F5F7FB;

    cursor: pointer;

    &:hover{
      filter: brightness(0.9);
      }
    }
  }  
`