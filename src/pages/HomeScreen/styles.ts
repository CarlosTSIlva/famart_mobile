import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const View2 = styled.View`
  display: flex;
  align-items: center;
  border: ${normalize(1)}px;
  border-color: rgb(59, 59, 59);
  width: ${normalize(320)}px;
  height: ${normalize(40)}px;
  border-radius: ${normalize(10)}px;
  padding: ${normalize(5)}px;
  margin-top: ${normalize(8)}px;
  text-align: center;
`;
