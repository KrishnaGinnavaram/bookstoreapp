import React from 'react';
import { Avatar } from 'react-native-elements';
function AvatarComponent({size,overlayContainerStyle,icon,containerStyle,activeOpacity}) {
    return (
       <Avatar
       size={size}
       rounded
       overlayContainerStyle={overlayContainerStyle}
       icon={icon}
       containerStyle={containerStyle}
       activeOpacity={activeOpacity}
       />
    );
}

export default AvatarComponent;