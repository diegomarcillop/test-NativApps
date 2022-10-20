import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

import {Button} from '../../components/Button/Button';
import {style} from './ModalCreateReport.style';
import * as ReportStorage from '../../common/Storage/Reports';

const InitialState = {
  description: undefined,
  image: undefined,
};

const options = {
  title: 'Seleccionar imagen',
  cancelButtonTitle: 'Cancelar',
  takePhotoButtonTitle: 'Tomar foto',
  chooseFromLibraryButtonTitle: 'Elegir desde Galería',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  quality: 0.1,
};

export const ModalCreateReport = ({visible, setVisible}) => {
  const [form, setForm] = useState(InitialState);

  useEffect(() => {
    setForm(InitialState);
  }, [visible]);

  const addImage = () => {
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        setForm({
          ...form,
          image: source.assets[0],
        });
      }
    });
  };

  const onFinish = async () => {
    await ReportStorage.save(form);
    setVisible(false);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={style.content}>
        <View style={style.container}>
          <TouchableOpacity
            style={style.btn_close}
            onPress={() => setVisible(false)}>
            <Text style={style.text_btn_blose}>{'✕'}</Text>
          </TouchableOpacity>
          <Text style={style.title}>Crear reporte</Text>
          <View>
            <Text style={style.label}>
              Imagen<Text style={style.required}>*</Text>
            </Text>
            <TouchableOpacity style={style.btn_upload} onPress={addImage}>
              <Image
                style={style.upload_btn}
                source={form.image || require('../../assets/images/upload.png')}
              />
              <Text style={style.text_small}>
                {form.image ? 'Cambiar' : 'Subir'}
              </Text>
            </TouchableOpacity>
            <Text style={style.label}>
              Descripción<Text style={style.required}>*</Text>
            </Text>
            <TextInput
              onChangeText={description => setForm({...form, description})}
              value={form.description}
              placeholder="Escribe la descripción"
              style={style.input}
              multiline={true}
              numberOfLines={5}
            />
          </View>
          <View style={style.actions}>
            <Button
              name="Crear"
              disabled={!form.description}
              onPress={onFinish}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
