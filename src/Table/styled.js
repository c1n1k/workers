import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  margin-bottom: 20px;
`;

export const Head = styled.div`
  display: table;
  width: 100%;
  font-weight: bold;
  border-bottom: 1px solid #ababab;
`;

export const HeadRow = styled.div`
  display: table;
  width: 100%;
`;

export const HeadCell = styled.div`
  padding: 10px;
  display: table-cell;
  width: 25%;
`;

export const HeadActions = HeadCell.extend`
  padding-right: 0;
  text-align: right;
`;

export const Body = styled.ol`
  padding: 0;
  margin: 0;
  display: table;
  width: 100%;
  list-style: none;
`;

export const Row = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ababab;

  &:hover {
    background-color: #efefef;
  }
`;

export const CardLink = styled(Link)`
  display: table;
  width: 75%;
  color: inherit;
  text-decoration: none;
`;

export const Actions = styled.div`
  width: 25%;
  align-self: center;
  text-align: right;
`;

export const Cell = styled.div`
  padding: 10px;
  display: table-cell;
  width: 25%;
`;
