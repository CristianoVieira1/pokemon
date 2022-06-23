import styled from 'styled-components/native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/DeviceResolution';

export const Logo = styled.View`
	left: ${widthPercentageToDP('32%')}px;
	top: ${heightPercentageToDP('20%')}px;
`

export const Ball = styled.View`
	left: ${widthPercentageToDP('40%')}px;
	top: ${heightPercentageToDP('70%')}px;
`
// export const Ball = styled.View`
//  	left: ${widthPercentageToDP('40%')}px;
//  	top: ${heightPercentageToDP('70%')}px;
//    animation-name: animation-content;
//   /* animation-duration: 3s;  */

//   @keyframes animation-content {
//     0% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
// `;
