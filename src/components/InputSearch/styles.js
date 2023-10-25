import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 352px;
  color: ${({ theme }) => theme.GRAY_100};
  background-color: ${({ theme }) => theme.BACKGROUND_400};
  padding: 10px 16px;
  border-radius: 8px;

  input {
    border: none;
    background: transparent;
    font-size: 14px;

  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
