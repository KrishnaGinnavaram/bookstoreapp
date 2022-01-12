import React,{useState} from 'react';
import { SafeAreaView, Switch, View } from 'react-native';

function Switches(props) {
    const [sw,setSw] = useState(false)
    return (
        <SafeAreaView>
            <Switch
            value={sw}
            onValueChange={txt => setSw(txt)}
              />
        </SafeAreaView>
    );
}

export default Switches;