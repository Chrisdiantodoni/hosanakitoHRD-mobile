import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Header,
  Layout,
  RadioButton,
  TextInput,
  Section,
  Button,
  DateTimePicker,
} from '../../components';

const Overtime = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleDateChange = selectedDate => {
    setDate(selectedDate);
  };

  const handleStartTimeChange = selectedTime => {
    setStart(selectedTime);
  };

  const handleEndTimeChange = selectedTime => {
    setEnd(selectedTime);
  };
  const [textInputHeight, setTextInputHeight] = useState(40); // Initial height

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    setTextInputHeight(contentHeight + 20);
  };

  return (
    <>
      <Header title={'Overtime'} back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Overtime Date</Text>
        <DateTimePicker
          value={date}
          onChange={handleDateChange}
          mode="date"
          placeholder="Select Date"
          iconColor="#a60f21"
        />
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 20,
          }}>
          <View
            style={{
              width: '48%',
            }}>
            <Text>Overtime Start</Text>
            <DateTimePicker
              value={start}
              onChange={handleStartTimeChange}
              mode="time"
              placeholder="Select Time"
              iconColor="#a60f21"
            />
          </View>

          <View style={{width: '48%'}}>
            <Text>Overtime End</Text>
            <DateTimePicker
              value={end}
              onChange={handleEndTimeChange}
              mode="time"
              placeholder="Select Time"
              iconColor="#a60f21"
            />
          </View>
        </View>
        <Text>Reason</Text>
        <TextInput
          multiline={true}
          onContentSizeChange={e =>
            handleContentSizeChange(
              e.nativeEvent.contentSize.width,
              e.nativeEvent.contentSize.height,
            )
          }
        />
        <Button title="Request" />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Overtime;
