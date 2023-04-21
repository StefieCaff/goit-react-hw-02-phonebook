import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: transparent;
    border: transparent;
    // border: .5px solid #C5A120;
    border: .5px solid #f8e396;
    border-radius: 50%;
    padding: 3px;
    
    margin-left: 10px;
    
    // box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, 
    //     rgba(0, 0, 0, 0.07) 0px 2px 4px, 
    //     rgba(0, 0, 0, 0.07) 0px 4px 8px, 
    //     rgba(0, 0, 0, 0.07) 0px 8px 16px, 
    //     rgba(0, 0, 0, 0.07) 0px 16px 32px, 
    //     rgba(0, 0, 0, 0.07) 0px 32px 64px;


    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    
`;

export { StyledButton }