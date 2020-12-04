import styled from "styled-components";
export const StyledCardWrapper = styled.div`
  width: 320px;
  height: 500px;
  color: #bdbdbd;
  box-shadow: 3px 2px 10px rgba(10, 10, 10, 0.9);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 60px 10px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: rgba(10, 10, 10, 0.5);
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const StyledImgWrapper = styled.img`
  border-radius: 10px;
  width: auto;
  height: 77%;
  margin: 5px 0;
`;
export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  justify-content:space-between;
`;
export const StyledButton = styled.button`
  background-color: rgba(19,85,124,0.6);
  border: none;
  color: white;
  padding: 4px 8px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 5px 0px;
  transition-duration: 0.4s;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
  }
`;