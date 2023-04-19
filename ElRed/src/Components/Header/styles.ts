import styled from "styled-components";

export const PrimaryHeader = styled.div`
    min-height: 70px;
    background-color: white;
    width: 100%;
    padding: 10px 25px;
    display: flex;
    align-items: center;

    .logo-img {
        height: 80px;
    }

    .left-side {
        min-width: 295px;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .right-side {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
`;