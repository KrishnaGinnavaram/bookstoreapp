import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native';
function Files(props) {
//   const {counter} = props
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={props.increaseCounter}>
            <Text>Increase</Text>
            </TouchableWithoutFeedback>
            <Text>{props.counter}</Text>
            <TouchableWithoutFeedback onPress={props.decreaseCounter}>
            <Text>Decrease</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

function mapStateToProps(state) {
    return {
    counter : state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Files);