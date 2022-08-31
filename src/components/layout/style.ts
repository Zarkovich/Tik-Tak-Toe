import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    margin: auto;

    max-width: 500px;
    max-height: 500px;

    width: 100%;
    height: 100vh;
`;

export const WBar = styled.span<{ top?: string; bottom?: string }>`
    position: absolute;

    display: block;

    width: 100%;
    height: 6px;

    top: ${(prop) => prop.top};
    bottom: ${(prop) => prop.bottom};

    background-color: #ffab2d;
    border: 2px solid #ffd56a;
    border-radius: 6px;

    box-shadow: 0 0 10px #ffab2d;
`;

export const HBar = styled.span<{ right?: string; left?: string }>`
    position: absolute;

    display: block;

    width: 6px;
    height: 100%;

    right: ${(prop) => prop.right};
    left: ${(prop) => prop.left};

    background-color: #ffab2d;
    border: 2px solid #ffd56a;
    border-radius: 6px;

    box-shadow: 0 0 10px #ffab2d;
`;
