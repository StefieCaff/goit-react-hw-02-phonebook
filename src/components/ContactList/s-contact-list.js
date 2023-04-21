import styled from 'styled-components';

const StyledListWrapper = styled.div`
    display: Flex;
    align-items: center;
`;

const StyledList = styled.div`
   list-style: none;
   display: flex;
   flex-direction: column;
   
`;

const StyledItem = styled.div`
background-color: #e0e0d9c5;
    display: Flex;
    align-items: center;
    max-width: 240px;
    margin: 0 10px 10px 10px;
    padding: 10px 50px 5px 0;
    border-bottom: .1px solid #f8e396;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const StyledInfo = styled.div`
   font-size: 14px;
   border-left: 1px solid #C5A120;
   margin-left: 10px;
   padding-left: 10px;
   max-width: 180px;
   min-height: 43px;

`;

const StyledCallto = styled.a`
   color: #C5A120;
   background-color: #fffefa;
   border-radius: 10px;
   padding: 2px 5px;
  
   transition: background-color 1s, color 1s;     
      &:hover {
         color: #fffefa;
         background-color: #C5A120; 
      }

`;

export {
   StyledListWrapper,
   StyledList,
   StyledItem,
   StyledInfo,
   StyledCallto
}