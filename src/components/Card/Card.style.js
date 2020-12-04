import styled from 'styled-components';


export const StyledCardWrapper = styled.div`
padding-top: 15px;
padding-bottom: 10px;
width: 320px;
height: 500px;
color: #bdbdbd;
box-shadow: 3px 2px 10px rgba(10, 10, 10, 0.9);
display: flex;
flex-direction: column;
border: 1px solid black;
margin: 50px 10px;
transition: 0.3s;
border-radius: 10px;
background-color: rgba(10, 10, 10, 0.5);

&:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

    
`

export const StyledImgWrapper = styled.img`
    width: auto; 
    height: 73% ;
    border-radius:10px;
    margin: 5%;

`
export const StyledFooterWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 20px

`
export const StyledTitleWrapper = styled.div`
    height: 10% ;
    font-size: 1.2rem;
`
