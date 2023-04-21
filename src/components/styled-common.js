import styled from "styled-components";

const StyledFlexColumn = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: #fffefa;
    padding: 20px;
    margin: 0px 20px;
    border-radius: 10px;
`;

const StyledHeader = styled.h1`
    font-family: 'Oxygen';
`;

const StyledTitle = styled(StyledHeader)`
  font-size: 16px;
//   margin: 5px 0 0 10px;
`;

const StyledFlex = styled.div`
    display: flex;
    align-items: flex-start;
`;

const StyledFlexContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export {
    StyledFlexColumn,
    StyledHeader,
    StyledTitle,
    StyledFlex,
    StyledFlexContainer
} 