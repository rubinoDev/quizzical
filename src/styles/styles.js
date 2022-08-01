import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #F5F7FB;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  overscroll-behavior-x: unset;

  padding-inline: 2rem;
  .blue-blob{
    position: absolute;

    width: 25rem;

    transform: translate(-15rem, 35rem) ;
    transition: all ease-in-out 1000ms;

    &.quiz{
      transform: translate(-30rem, 40rem) ;

    }
  }

  .yellow-blob{
    position: absolute;

    width: 25rem;

    transform: translate(15rem,-30rem);
    transition: all ease-in-out 1000ms;

    opacity: 0.8;



    &.quiz{
      transform: translate(25rem, -40rem) ;

    }
  }


  @media (min-width:800px){
    .blue-blob{
      transform: translate(-40rem,25rem);   
      transition: all ease-in-out 1000ms;
      width: 45rem;

      &.quiz{
        transform: translate(-70rem,40rem);

    }
    }

    .yellow-blob{
      width: 45rem;

      transform: translate(55rem, -15rem) ;
      transition: all ease-in-out 1000ms;

      &.quiz{      
        transform: translate(60rem,-40rem);
      }
    }

  }


`