import React, { useState } from 'react';
import { ScrollView, Modal, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Title,
    InputUser,
    AddWork,
    WorkContainer,
    Task,
    TaskContainer,
    TaskIconsContainer,
    ModalContainer,
    Content,
    ModalUserInput,
    ButtonModalText,
    CloseModal
} from './styles';



export function Home() {

    const [modalVisible, setModalVisible] = useState(false);

    let [textEditModal, setTextEditModal] = useState('');

    let [userInput, setUserInput] = useState('');

    let [taskList, setTaskList] = useState([{ id: '423432', description: 'Teste' }, { id: '123', description: 'Ir Dormir' }, { id: '5342', description: 'Comer' }, { id: '5219', description: 'Jogar Jogos' }]); //Lista com todas as Tasks

    let [taskIDModal, setTaskIDModal] = useState('');

    function addTask() {

        if (userInput != '' && userInput != ' ') {
            taskList.push({ id: String(new Date().getTime()), description: userInput });
            setTaskList([...taskList]);
            setUserInput('');// Apaga o input do usuário
        } else {
            alert('Insira um nome para a tarefa!');
        }

    }


    function lapis() {

        console.log("lapis");
    }



    function deleteTask(task) {

        let taskListAUX = [];

        taskList.filter((item) => {
            if (item.id != task.id) {
                taskListAUX.push(item);
            }
        });

        setTaskList(taskListAUX);
    }

    function findId(task) {
        setTaskIDModal(task.id);
        setTextEditModal(task.description);
        
        setModalVisible(true);
    }

    function handleEditTaskName() {

        setModalVisible(!modalVisible);
        
        {taskList.filter((task) => {
            if (taskIDModal == task.id) {
                task.description = textEditModal;
            }
        })

        }

    }

    return (
        <Container>
            <Title>Bem vindo, Pessoa</Title>

            <WorkContainer>
                <Title>Insira uma tarefa</Title>
                <TouchableOpacity onPress={() => addTask()}>
                    <AddWork name="plus" />
                </TouchableOpacity>
            </WorkContainer>

            <InputUser
                value={userInput}
                onChangeText={setUserInput}
                returnKeyType="search"
                placeholder="Insira o nome da tarefa"
                placeholderTextColor="#ff7b00"
            />



            <ScrollView>


                {taskList.map((task) => {
                    return (
                        <TaskContainer key={task.id}>
                            <Task>{task.description}</Task>

                            <TaskIconsContainer>
                                <TouchableOpacity onPress={() => { findId(task) }}>
                                    <MaterialCommunityIcons name="pencil-outline" size={24} color="orange" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => deleteTask(task)}>
                                    <Feather name="trash-2" size={24} color="orange" />
                                </TouchableOpacity>
                            </TaskIconsContainer>
                        </TaskContainer>
                    );
                })}


            </ScrollView>



            <ModalContainer
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Content>
                        <CloseModal onPress={() => setModalVisible(!modalVisible)}>
                            <AntDesign name="closecircle" size={24} color="white" />
                        </CloseModal>

                        <Text style={{ color: 'white' }}>Insira o novo nome</Text>

                        <ModalUserInput
                            value={textEditModal}
                            onChangeText={setTextEditModal}
                        />

                        <TouchableOpacity onPress={() => handleEditTaskName()}>
                            <ButtonModalText>Confirmar</ButtonModalText>
                        </TouchableOpacity>

                    </Content>
                </View>
            </ModalContainer>
        </Container>

    );
}