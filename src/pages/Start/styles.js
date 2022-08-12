import styled, { css } from "styled-components";

export const StartContainer = styled.div` 

  .start__title{
    font-family: 'Karla';
    font-weight: 700;
    font-size: 5rem;
    line-height: 3.7rem;

    color: #293264;

    margin-bottom: 3rem;
  }

  .start__button{
    opacity: 0;
    ${props =>
    props.isTimeToShowButton && 
      css`
        opacity: 1;
      `
    }
    transition: opacity ease-in-out 1000ms;

    border:none;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: #F5F7FB;
    background: #4D5B9E;
    border-radius: 1.5rem;

    padding-block: 2rem;
    padding-inline: 6.2rem;

    cursor: pointer;

    &:hover{
      filter: brightness(1.2);
    }
  }
`