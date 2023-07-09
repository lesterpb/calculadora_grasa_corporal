import styled from "@emotion/styled";

export const InputTextWrapper = styled.label`
        
    color: #C1C1C1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 400;

    input[type=text] {
        
        border: 1px solid #577;
        border-radius: 100px;
        color: #C1C1C1;
        height: 38px;
        width: 98%;
        background-color: transparent;
        padding: 0 12px;        

        &:focus {
            outline: none;
            border: 2px solid #577
        }

        &::placeholder {
            color: #577;
            opacity: 1;
        }
    }
`;

export const RadioWrapper = styled.label`
    color: #C1C1C1;
    
    &:hover {
        cursor: pointer;
    }

    input[type=radio] {
        box-sizing: border-box;
        border: 3px solid white;
        appearance: none;
        outline: none;
        border-radius: 50%;
        height: 9px;
        width: 9px;
        background: white;
        margin-right: 8px;
    }

    input[type=radio]:checked {
        box-sizing: border-box;
        border: 3px solid #8365ec;
    }
`;

export const Button = styled.button`
    --black: #262626;
    --blue: #8365ec;
    --light-blue: #C3C9ED;
    --white: #FFFFFF;
    --gray: #676767;
    --light-gray: #67676719;
    --light-gray-2: #C1C1C1;
    
    color: ${({colorType})=> colorType === 'primary' ? 'var(--white)' : 'var(--light-gray-2)'};
    background-color: ${({colorType})=> colorType === 'primary' ? 'var(--blue)' : 'transparent'};
    border: 1px solid ${({colorType})=> colorType === 'primary' ? 'var(--blue)' 
                                    : colorType === 'transparentPrimary' ? 'transparent'
                                    :'var(--black)'};

    border-radius: 100px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 8px 12px;
    cursor: pointer;
    height: 35px;    
    width: ${({width})=> width === 'big' ? '100%' : 
                         width === 'medium' ? '201.5px' : 
                         width === 'small' ? '160px' : 'auto'};
    line-height: 17px;
    letter-spacing: 0.5px;
    box-sizing: border-box;

    &:hover{
        background: ${({colorType})=> colorType === 'primary' ? 'linear-gradient(0deg, rgba(214, 21, 0, 0.08), rgba(214, 21, 0, 0.08)), var(--blue)' 
                                                    : colorType === 'transparentPrimary' ? 'transparent'
                                                    : 'var(--light-gray)'};
        box-shadow: ${({colorType})=> colorType === 'primary' && '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.3)'};
        color: ${({colorType})=> colorType === 'transparentPrimary' && 'var(--blue)'}
    }

    &.secodary {
        color: var(--blue);
        background-color: var(--white);
    }
`;

export const GradientBar = styled.div`
    height: 100px;
    width: 100%;
    border-radius: 8px;
    background-image: linear-gradient(to right, turquoise 0 3%, #387825 20% 30%, gold 60% 70%, darkorange 90% 100%);
`;

export const GradientBarSectionDescriptionWrapper = styled.div`

    display: flex;
    width: auto;
    flex-direction: column;
    text-align: center;
    gap: 6px;
    color: #C1C1C1;

    & .circle {
        align-self: center;
        height: 15px;
        width: 15px;
        border: 1px solid #C1C1C1;
        border-radius: 40%;
        background-color: ${({color}) => color} 
    }

    & .value {
        font-size: 16px; 
        font-weight: 500;
    }

    & .description {
        font-size: 14px;        
        font-weight: 400;
    }
`;

export const TriangleShape = styled.div`  
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-top: 18px solid white;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
    width: 0px;
`;

export const CursorWrapper = styled.div`
    display: inline-block;
    position:relative;
    height: 55px;
    left: ${({leftPosition}) => leftPosition!== undefined ? `calc(${3*leftPosition <= 2 ? 2 : 3*leftPosition >= 99 ? 99 : 3*leftPosition}% - 3% - 18px)` : "100%"};
    transition: left 0.5s ease;

    & > .information-text {
        font-size: 26px;
        text-align: center;
        position: relative;
    }
`;

export const NavBar = styled.nav`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    padding: 8px 40px 12px;
    background-color: #8365ec;
    display: flex;
    justify-content: space-between;
`;