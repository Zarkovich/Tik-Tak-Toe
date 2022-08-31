import styled from "styled-components";

export const Cell = styled.div<{ selected: boolean }>`
    margin: auto;

    width: 80%;
    height: 80%;

    border: ${(prop) => (prop.selected ? "none" : "2px solid #33E9E9")};
    box-shadow: ${(prop) =>
        prop.selected ? "none" : "0 0 10px inset #33e9e9"};

    border-radius: 20px;
`;
