import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    
    background-color: white;
    height: 100%;
    width: 100%;

    margin-left: 10px;
    margin-right: 10px;
     
    z-index: 99;

    border: 1px;
    border-color: blue;
`;

export const Texto = styled.Text`
    color: blue;
    font-size: 40px;
`;

export const ModalUserInput = styled.TextInput`

`;
