import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {CardReport} from '../CardReport/CardReport';
import {style} from './ListReports.style';
import * as ReportsStorage from '../../common/Storage/Reports';

export const ListReports = ({create}) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getAllReports();
  }, [create]);

  const getAllReports = async () => {
    const data = await ReportsStorage.getAll();
    setReports(data || []);
  };

  return (
    <View style={style.container}>
      {reports.length === 0 && (
        <View style={style.feedback}>
          <Text style={style.feedback_text}>
            Aún no tienes reportes registrados! pero
          </Text>
          <Text style={style.feedback_text}>
            puedes crear un nuevo reporte {':)'}
          </Text>
        </View>
      )}
      {reports.map((report, index) => (
        <View style={style.item} key={index}>
          <CardReport image={report.image} description={report.description} />
        </View>
      ))}
    </View>
  );
};
