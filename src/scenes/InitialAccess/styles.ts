import styled from "styled-components/native";
import { colors } from "../../utils/colors";

import Background from '../../assets/icons/Onboarding/Background01.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const TopSide = styled.View`
  flex: 1;
  padding-top: 30px;
  align-items: center;
`;

export const BottomSide = styled.View`
  flex: 1;
  margin: 0 24px;
  justify-content: flex-end;
`;

export const Description = styled.Text`
  font-size: 28px;
  font-weight: 800;
  line-height: 36px;
  margin-bottom: 24px;
  color: ${colors.white};
`;

export const AccessYourAccountBtn = styled.TouchableOpacity`
  height: 56px;
  border-radius: 6px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const AccessYourAccountText = styled.Text`
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  color: ${colors.primary};
`;

export const CreateAccountBtn = styled.TouchableOpacity`
  height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.orange};
`;

export const CreateAccountText = styled.Text`
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  color: ${colors.white};
`;

export const NeedHelpBtn = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
`;

export const NeedHelpText = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 35px;
  color: ${colors.white}
`;

export const NeedHelpOrangeText = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.orange};
`;

export const BackgroundImg = styled(Background)`
  z-index: -1;
  position: absolute;
`;