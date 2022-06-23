import { TextInput } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 6px;
  color: ${colors.primary};
`;

interface InputContent {
  hasError: boolean;
}

export const Content = styled.View<InputContent>`
  height: 56px;
  padding: 0 19px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.hasError ? colors.danger : colors.lightBlue};
`;

interface InputProps {
  hasSecureIndicator: boolean;
}

export const Input = styled(TextInput) <InputProps>`
  width: ${(props) => !!props.hasSecureIndicator ? '85%' : '100%'};
`;

export const ValidationMessage = styled.Text`
  font-size: 12px;
  margin-top: 4px;
  font-weight: 700;
  line-height: 20px;
  color: ${colors.danger};
`;