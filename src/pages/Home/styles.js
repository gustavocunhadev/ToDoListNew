import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    height: 100%;
    background-color: black;
`;

export const Title = styled.Text`
    color: white;
    padding-top: 40px;
    padding-left: 20px;

    font-size: ${RFValue(18)}px;

`;

export const InputUser = styled.TextInput`
    border: 1.5px;
    border-color: white;
    border-radius: 10px;

    color: white;

    margin: 25px 20px;
`;

export const AddWork = styled(Feather)`
    font-size: ${RFValue(20)}px;
    align-self: flex-end;

    color: white;

    margin-right: 20px;
`;

export const WorkContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


export const TaskContainer = styled.View`
    border: 1.5px;
    border-color: white;
    border-radius: 20px;

    padding: 15px;
    margin: 10px 20px;

    flex-direction: row;
    justify-content: space-between;
`;

export const Task = styled.Text`
    color: white;

    font-size: ${RFValue(20)}px;
`;

export const TaskIconsContainer = styled.View`
    flex-direction: row;


`;









export const ModalContainer = styled.Modal`
    border: 1px solid white;

    margin-left: 50%;
    margin-top: 50%;
`;


export const Content = styled.View`
    justify-content: center;
    align-items: center;
    
    background-color: black;
    height: 40%;
    width: 70%;
     
    z-index: 99;

    border: 1px;
`;



export const ButtonModalText = styled.Text`
    border: 1px solid white;
    border-radius: 15px;
    
    padding: 10px;

    width: 100px;

    text-align: center;

    color: white;
`;


export const ModalUserInput = styled.TextInput`
    color: white;
`;

export const CloseModal = styled.TouchableOpacity`
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-end;

`;