import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './CardReport.style';

export const CardReport = ({image, description}) => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={image || require('../../assets/images/default.png')}
      />
      <View style={style.content}>
        <Text style={style.label}>Descripción</Text>
        <Text style={style.description} ellipsizeMode="tail" numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
};
