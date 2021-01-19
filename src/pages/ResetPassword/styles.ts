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
  border-radius: ${normalize(10)}px;
  margin-top: ${normalize(5)}px;
  text-align: center;
`;
