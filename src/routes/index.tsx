import React, {createRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

import PublicRoutes from './public.routes';

type ParamList = {
  InitialAccess: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}

export const navigationRef = createRef<NavigationContainerRef<ParamList>>();

const Routes = () => {
  return <PublicRoutes />;
};

export default Routes;
