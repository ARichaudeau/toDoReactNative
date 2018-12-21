import React from 'react';
import {Text, View, Switch} from 'react-native';

export class ToDoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {isDone: props.todoIsDone};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState((prevState) => ({
      isDone: !prevState.isDone
    }))
  }

  render() {

    if (this.props.todoItem) {
      return (
        <View>
            <Text>
              {this.props.todoItem.toUpperCase()}
            </Text>
            <Switch
              value={this.state.isDone} onValueChange={this.handleChange}>
            </Switch>
        </View>
      );

    }

    return null;
  }
}