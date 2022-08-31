import styled from "styled-components";

export const XPlayer = styled.div`
    position: relative;

    margin: auto;
    margin-top: 20px;

    width: 90%;
    height: 90%;

    &::before {
        position: absolute;

        content: "";

        border: 2px solid red;
        border-radius: 6px;
        /* outline: 1px solid rgba(100, 100, 100, 0.9); */

        box-shadow: 0 0 5px inset red;

        width: 100%;
        height: 10px;

        bottom: 60%;

        transform: rotate(-45deg);
    }

    &::after {
        position: absolute;

        content: "";

        background-color: black;
        border: 2px solid red;
        border-radius: 6px;

        box-shadow: 0 0 5px inset red;

        width: 100%;
        height: 10px;

        bottom: 60%;

        transform: rotate(45deg);
    }
`;

export const BallPlayer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid #0094ff;
    border-radius: 50%;

    box-shadow: 0 0 10px inset #0094ff;

    margin: auto;

    width: 90%;
    height: 90%;

    &::after {
        position: absolute;

        content: "";

        width: 70%;
        height: 70%;

        border: 2px solid #0094ff;
        border-radius: 50%;

        box-shadow: 0 0 10px inset #0094ff;
    }
`;
