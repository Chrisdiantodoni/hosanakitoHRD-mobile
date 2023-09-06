// CustomDateTimePicker.js
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInput from './textInput';

const dateTimePicker = ({value, onChange, mode, placeholder, iconColor}) => {
  const [showPicker, setShowPicker] = useState(false);

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const onDateTimeChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={showDateTimePicker}
        style={{justifyContent: 'center'}}>
        <TextInput
          value={moment(value).format(
            mode === 'date' ? 'DD MMMM YYYY' : 'hh:mm A',
          )}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
        />
        <Icon
          name={mode === 'date' ? 'calendar-outline' : 'time-outline'}
          size={25}
          color={iconColor}
          style={{position: 'absolute', paddingRight: 10, right: 0}}
        />
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={value}
          onChange={onDateTimeChange}
          mode={mode}
          is24Hour={true}
          display={mode === 'date' ? 'calendar' : 'clock'}
        />
      )}
    </View>
  );
};

export default dateTimePicker;
