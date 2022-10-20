import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {style} from './Button.style';

export const Button = ({name, width, disabled, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        ...style.container,
        width: width || 'auto',
        opacity: disabled && 0.5,
      }}
      {...props}
      disabled={disabled}>
      <Text style={style.text}>{name}</Text>
    </TouchableOpacity>
  );
};
