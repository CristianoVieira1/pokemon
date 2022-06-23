import React, { Fragment } from 'react';
import { WithChildren } from '../../types';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

interface Props extends WithChildren {
  statusbarColor: StatusBarStyle;
}

const ScreenView = ({children, statusbarColor}: Props) => (
  <Fragment>
    <StatusBar style={statusbarColor} />
    {children}
  </Fragment>
)

export default ScreenView;
