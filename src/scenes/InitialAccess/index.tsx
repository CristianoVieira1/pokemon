import React from 'react';
import { Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { translate } from '../../utils/internationalization'
import ScreenView from '../../components/ScreenView';

import * as S from './styles';
import LogoImg from '../../assets/images/Logo.png';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const InitialAccess = ({navigation}: Props) => {
  const goToLoginScreen = () => {
    // navigation.navigate('Login');
  };

  return (
    <ScreenView statusbarColor="light">

      <S.Container>
        <S.TopSide>
          <Image source={LogoImg} />
        </S.TopSide>

        <S.BottomSide>
          <Animatable.View delay={1000} animation="fadeIn">
            <S.Description>{translate('initialAccess.description')}</S.Description>
          </Animatable.View>

          <Animatable.View delay={1500} animation="fadeInLeft">
            <S.AccessYourAccountBtn onPress={goToLoginScreen}>
              <S.AccessYourAccountText>
                {translate('initialAccess.accessAccount')}
              </S.AccessYourAccountText>
            </S.AccessYourAccountBtn>

            <S.CreateAccountBtn onPress={() => {}}>
              <S.CreateAccountText>
                {translate('initialAccess.createAccount')}
              </S.CreateAccountText>
            </S.CreateAccountBtn>
          </Animatable.View>

          <S.NeedHelpBtn onPress={() => {}}>
            {/* <NeedHelpText>{translate('initialAccess.needHelp')}</NeedHelpText>
            <NeedHelpOrangeText>{translate('initialAccess.clickHere')}</NeedHelpOrangeText> */}
          </S.NeedHelpBtn>
        </S.BottomSide>
      </S.Container>


    </ScreenView>
  );
};

export default InitialAccess;
