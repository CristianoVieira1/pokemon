import { TextInputProps } from 'react-native';
import React, { Fragment, memo, useState } from "react";

import SecureText from './SecureText';
import { Content, Input, Label, ValidationMessage } from './styles';

interface Props extends TextInputProps {
  label: string;
  validation?: string;
  clearValidation?: () => void;
  displaySecureIndicator?: boolean;
}

const InputText = (props: Props) => {
  const {
    label,
    validation,
    onChangeText,
    clearValidation,
    displaySecureIndicator = false,
    ...others
  } = props;
  
  const [isVisible, setVisible] = useState(displaySecureIndicator);

  /* Each validation should be cleared after change the input text */
  const handleTextChange = (text: string) => {
    if (!!validation && clearValidation) {
      clearValidation();
    }

    onChangeText!(text);
  }

  return (
    <Fragment>
      <Label>{label}</Label>

      <Content hasError={!!validation}>
        <Input
          {...others}
          secureTextEntry={isVisible}
          onChangeText={handleTextChange}
          hasSecureIndicator={displaySecureIndicator}
        />

        {displaySecureIndicator && (
          <SecureText isVisible={isVisible} changeVisibility={setVisible} />
        )}
      </Content>

      <ValidationMessage>{validation}</ValidationMessage>
    </Fragment>
  )
}

export default memo(InputText);