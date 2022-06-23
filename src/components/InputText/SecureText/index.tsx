import { TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import HelperIcon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../../../utils/colors";

interface Props {
  isVisible: boolean;
  changeVisibility: Dispatch<SetStateAction<boolean>>;
}

const SecureText = ({ isVisible, changeVisibility }: Props) => {
  const iconName = isVisible ? 'eye-slash' : 'eye';

  return (
    <TouchableOpacity onPress={() => changeVisibility(prevValue => !prevValue)}>
      <HelperIcon name={iconName} size={24} color={colors.primary} />
    </TouchableOpacity>
  )
}

export default SecureText;