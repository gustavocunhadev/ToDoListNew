import React, { useState } from 'react';
import { FlatList, ScrollView, Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { ActionModal } from '../../components/ActionModal'

import {
    Container,
    Title,
    InputUser,
    AddWork,
    WorkContainer,
    Task,
    TaskContainer,
    ModalContainer,
    TaskIconsContainer,
    ModalView
} from './styles';



export function Home() {

    let [textEditModal, setTextEditModal] = useState();

    const [modalVisible, setModalVisible] = useState(false);

    let [userInput, setUserInput] = useState('');

    let [taskList, setTaskList] = useState([{ id: '423432', description: 'Teste' }, { id: '123', description: 'Ir Dormir' }, { id: '5342', description: 'Comer' }, { id: '5219', description: 'Jogar Jogos' }]); //Lista com todas as Tasks

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

        setTextEditModal(task);
        
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
                                <TouchableOpacity onPress={() => {findId(task), setModalVisible(true)}}>
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
                onRequestClose={() => setModalVisible(!modalVisible)}
                >

                <ActionModal
                    textEditModal={textEditModal}
                    modal={modalVisible}
                />

            </ModalContainer>

        </Container>

    );
}