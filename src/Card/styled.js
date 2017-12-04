import styled from "styled-components";

export const Wrap = styled.dl`
  padding: 40px 0;
`;

export const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
  line-height: 1.5;
`;

export const Term = styled.dt`
  flex-shrink: 0;
  width: 100px;
  font-size: 14px;
  color: #787878;
`;

export const Desc = styled.dd`
  font-size: 18px;
  font-family: Georgia, serif;
`;

export const Actions = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
`;
