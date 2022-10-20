import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {Button} from '../../components/Button/Button';
import {ListReports} from '../../components/ListReports/ListReports';
import {ModalCreateReport} from '../../components/ModalCreateReport/ModalCreateReport';
import {style} from './Home.style';

export const Home = () => {
  const [showModalCreate, setShoModalCreate] = useState(false);

  return (
    <View style={style.container}>
      <Text style={style.title}>Gestion de reportes</Text>
      <View style={style.line} />
      <Text style={style.title_section}>Lista de reportes</Text>
      <View style={style.list}>
        <ScrollView persistentScrollbar={true}>
          <ListReports create={showModalCreate} />
        </ScrollView>
      </View>
      <View style={style.actions}>
        <Button
          name="Crear reporte"
          width="100%"
          onPress={() => setShoModalCreate(!showModalCreate)}
        />
      </View>
      <ModalCreateReport
        setVisible={setShoModalCreate}
        visible={showModalCreate}
      />
    </View>
  );
};
