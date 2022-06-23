import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Ball01 from '../../assets/icons/Splash/ball.png'
import ScreenView from '../../components/ScreenView'
import Logo from '../../assets/images/Logo.png'
import { Animated, Image } from 'react-native'
import * as S from './styled'

const SplashScreen = () => {
  const navigation = useNavigation()
  const [largura, setLargura] = useState(new Animated.Value(0))
  const [altura, setAltura] = useState(30);


  Animated.timing(
    largura,
    {
      toValue:420,
      duration: 2000
    }
  ).start();


  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('InitialAccess');
    }, 800000)
  }, [])

  return (
    <ScreenView statusbarColor="light">
      <S.Logo>
        <Image source={Logo} />
      </S.Logo>
      <Animated.View
      style={{
        width: largura,
        height: altura,
        backgroundColor: '#222'
      }}
      />
      {/* <S.Ball>
        <Image source={Ball01} />
      </S.Ball> */}
    </ScreenView>
  )
}

export default SplashScreen
