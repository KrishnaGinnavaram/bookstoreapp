import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native';
import { createStore } from 'redux';
import Files from './Files';
import { Provider } from 'react-redux';
function Counter(props) {

    const initValues = {
        counter : 0
    }
    const reducer = (state = initValues,action) => {
        switch(action.type) {
            case 'INCREASE_COUNTER' :
            return {counter: state.counter + 1}
            case 'DECREASE_COUNTER' :
            return {counter: state.counter - 1}
        }
         return state
    }
    const store = createStore(reducer);


    return (
        <Provider store={store}>
           <Files />
        </Provider>
    );
}

export default Counter;