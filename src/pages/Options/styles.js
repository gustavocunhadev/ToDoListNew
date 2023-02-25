import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`    
    background-color: black;
    height: 100%;
`;

export const Title = styled.Text`
    margin-top: 50px;
    margin-left: 20px;
    color: #fa6700;

    font-size: ${RFValue(25)}px;
`;

export const TitleOption = styled.Text`
    font-size: ${RFValue(20)}px;
    color: #fa6700;

    margin-top: 10px;
    margin-left: 20px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;

    background-color: white;
`;

export const FlatListOption = styled.FlatList`
    margin: 20px 0px;
`;

export const ExitButton = styled.TouchableOpacity`
    border: 2px;
    border-color: #fa6700;
    border-radius: 20px;

    margin: 20px;

    flex-direction: row;
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(20)}px;

    margin-left: 16px;
`;

export const ExitButtonText = styled.Text`
    color: #fa6700;
`;
