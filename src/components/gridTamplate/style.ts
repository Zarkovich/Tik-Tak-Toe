import styled from "styled-components";

export const Container = styled.div`
    margin: auto;

    position: absolute;

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    gap: 8px;
`;
