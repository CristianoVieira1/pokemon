import { colors } from "../../utils/colors";
import styled from "styled-components/native";

export const ContainerArea = styled.View`
  height: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface DotProps {
  isActived: boolean;
}

export const Dot = styled.View<DotProps>`
  width: 7px;
  height: 7px;
  margin: 0 4px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.isActived ? colors.orange : colors.gray};
`;
