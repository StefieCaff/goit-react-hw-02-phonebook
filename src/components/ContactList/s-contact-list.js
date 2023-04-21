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
    margin: 7px 0;
    padding: 10px 10px 10px 0;
    border-bottom: .1px solid #f8e396;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const StyledInfo = styled.div`
   font-size: 14px;
   //border-bottom: .5px solid #C5A120;
//    padding: 0px 20px 0 0;
   margin-left: 10px;
   min-width: 220px;
   min-height: 43px;
`;

export { StyledListWrapper, StyledList, StyledItem, StyledInfo }