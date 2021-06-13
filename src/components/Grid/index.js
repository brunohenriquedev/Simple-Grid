import styled from 'styled-components';

export const Container = styled.div`
    background: #262626;
    min-height: 100vh;
    height: 100%;
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before, &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before, &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`

function getWidthGrid(value) {
    if (!value) return;
    let width = value / 12 * 100;
    return `width: ${width}%;`
}

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    padding: .25rem;
    min-height: 1px;
    height: 300px;
    width: 300px;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${({ color }) => color && `${color}`};
    background-color: ${({ backgroundColor }) => backgroundColor && `${backgroundColor}`};

    @media only screen and (max-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }
    @media only screen and (max-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }
    @media only screen and (max-width: 1000px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
`