import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
    Container,
    Texto,
    Content,
    ModalUserInput
} from './styles'

export function ActionModal({ textEditModal, modalVisible }) {
    const [userInputModal, setUserInputModal] = useState('');

    return (
        <Container>
            <Content>

                <TouchableOpacity onPress={() =>  }>
                    <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>

                <ModalUserInput
                    value={textEditModal}
                    onChangeText={setUserInputModal}
                    returnKeyType="search"
                    placeholder="Insira o nome da tarefa"
                    placeholderTextColor="#ff7b00"
                />


                <TouchableOpacity>
                    <Text>Confirmar</Text>
                </TouchableOpacity>

            </Content>
        </Container>
    );
}