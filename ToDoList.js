import React from 'react';
import PropTypes from 'prop-types';

import {ToDoItem} from './ToDoItem';
import {View, FlatList, Text} from 'react-native';

export function ToDoList(props){
    if (props.todos.length === 0){
        return(
            <View>
                <Text>
                    Vous n'avez pas de todo
                </Text>
        </View>
        )
    }
    console.log('xxxxxxx', props.todos)
    return (
        // <View>
        //   {props.todos.map((item)=>
        //   <ToDoItem key= {item.id} todoItem={item.title} todoIsDone={item.isDone}/>)}
        // </View>
        
        <FlatList
            data={props.todos}
            keyExtractor={(item) => `${item.id}`}
            renderItem={(data) => {
                console.log('xxxxxxx', data.item)
                return (<ToDoItem key={data.item.id} todoItem={data.item.title} todoIsDone={data.item.isDone}/>)
            }}
      />
          
    );
}

ToDoList.propTypes = {
    todos : PropTypes.arrayOf(
      PropTypes.shape({
        id : PropTypes.number.isRequired,
        title : PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
      })
    ).isRequired}