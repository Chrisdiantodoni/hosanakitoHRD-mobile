import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Table, Row, TableWrapper} from 'react-native-table-component';
import {currency} from '../utils';

const table = ({headers, data, onRowPress, title}) => {
  const widthArrTable = () => {
    switch (title) {
      case 'Overtime List':
        return [40, 60, 140, 100, 100, 80, 80, 80, 100];
      case 'Leave List':
        return [40, 60, 140, 100, 70, 80, 80, 100];
      case 'Permit Leave Office':
        return [40, 60, 140, 100, 70, 200, 70];
      case 'Loan':
        return [40, 60, 140, 100, 70, 80, 140, 120, 100, 100];
      case 'Man Power Plan':
        return [40, 100, 80, 100, 70, 80, 70];
      case 'Overtime History':
        return [40, 100, 80, 80, 70, 80];
      case 'Clocking Result':
        return [40, 100, 80, 100];
      default:
        break;
    }
  };

  const formatNumberWithSeparator = number => {
    return currency(number);
  };

  const renderRows = () => {
    return data.map((rowData, index) => {
      const formattedRowData = rowData.map((cellData, cellIndex) => {
        if (typeof cellData === 'number') {
          return formatNumberWithSeparator(cellData);
        } else {
          return cellData;
        }
      });

      return (
        <TouchableOpacity
          key={index}
          onPress={() => onRowPress && onRowPress(rowData)}>
          <Row
            data={[index + 1, ...formattedRowData]}
            textStyle={styles.textRow}
            widthArr={widthArrTable()}
          />
        </TouchableOpacity>
      );
    });
  };
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Table borderStyle={styles.border}>
          <Row
            data={headers.map((header, index) =>
              index === 0 ? 'No.' : header,
            )}
            style={styles.head}
            textStyle={styles.headText}
            widthArr={widthArrTable()}
          />
          {renderRows()}
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  border: {
    borderWidth: 1,
  },
  head: {
    height: 40,
    backgroundColor: '#a60f21',
  },
  headText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: RFValue(14),
    textAlign: 'center',
  },
  textRow: {
    color: '#000',
    fontWeight: '700',
    fontSize: RFValue(14),
    textAlign: 'center',
    marginVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0.2,
    padding: 10,
  },
});

export default table;
