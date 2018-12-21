import React from 'react';

import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

export class ToDoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: ''};

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChangeTitle(value) {
        console.log('title changed', value);
        this.setState({title: value});
      }

    handleSubmit(event){
        event.preventDefault();
        if (this.state.title){
            this.props.addTodo(this.state.title);
            this.setState(() => ({
                title: '',
            }))
        }
        console.log('nouveau todo = title : ' + this.state.title)
    }

    handleRemove() {
        this.props.removeTodo();
    }

    render() {
        return (
            <View>
                <Text
                    style={styles.textToDo}>
                    Saisir un todo :
                </Text>
                <TextInput
                    type="title"
                    value={this.state.title}
                    placeholder="Saisissez votre todo"
                    onChangeText={this.handleChangeTitle} />
                <Button
                    onPress={this.handleSubmit}
                    title="Ajouter"/>
                <Button
                    onPress={this.handleRemove}
                    title="Supprimer la liste"/>
            </View>
          
        );
    }
}

const styles = StyleSheet.create({
    textToDo: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000080'
    }
})