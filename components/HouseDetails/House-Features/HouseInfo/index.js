import React from "react"
import {View,ScrollView} from "react-native"

import { Table, Row, Rows} from 'react-native-table-component';
import styles from "./styles";
const HouseInfo =(props) => {
	const data = [
        ['Fiyat', '2.500.000 TL'],
        ['İlan No', 'gfg5'],
        ['Oda Sayısı', '4']
 ];

	return(
		<View style={styles.container}>
			<ScrollView vertical={true}>
			<Table >
                {
                  data.map((dataRow, index) => (
                    <Row
					widthArr={[400, 800]}
                      key={index}
                      data={dataRow}
                      style={[styles.row]}
                    />
                  ))
                }
              </Table>
			</ScrollView>

	  </View>
	)
}

export default HouseInfo;