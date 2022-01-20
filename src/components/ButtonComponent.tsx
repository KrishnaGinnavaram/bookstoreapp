import React from 'react';
import { Button } from 'react-native-elements';
function ButtonComponent({title,buttonStyle,type,onPress,titleStyle,containerStyle,icon}) {
    return (
        <Button
         title={title}
         buttonStyle={buttonStyle}
         type={type}
         icon={icon}
         iconRight
         onPress={onPress}
         titleStyle={titleStyle}
         containerStyle={containerStyle}
        />
    );
}

export default ButtonComponent;