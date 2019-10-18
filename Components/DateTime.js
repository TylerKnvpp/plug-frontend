// import React from "react";
// import { Text, View, StyleSheet, TextInput, Button } from "react-native";
// import CButton from "./CButton";
// import DateTimePicker from "react-native-modal-datetime-picker";

// class DateTime extends React.Component {
//   state = {
//     isDateTimePickerVisible: false,
//     time: ""
//   };

//   showDateTimePicker = () => {
//     this.setState({ isDateTimePickerVisible: true });
//   };

//   hideDateTimePicker = () => {
//     this.setState({ isDateTimePickerVisible: false });
//   };

//   handleDatePicked = date => {
//     this.props.handleConfirm(date);
//     this.hideDateTimePicker();
//   };

//   render() {
//     const date = new Date();

//     return (
//       <View>
//         <Text style={styles.header}>When are you going?</Text>

//         <CButton
//           theme="secondary"
//           style={styles.button}
//           text="Show DatePicker"
//           onPress={this.showDateTimePicker}
//         />
//         <DateTimePicker
//           minimumDate={date}
//           mode="datetime"
//           isVisible={this.state.isDateTimePickerVisible}
//           onConfirm={this.handleDatePicked}
//           onCancel={this.hideDateTimePicker}
//         />
//       </View>
//     );
//   }
// }

// export default DateTime;

// const styles = StyleSheet.create({
//   header: {
//     fontSize: 24,
//     fontWeight: "900",
//     color: "white",
//     marginBottom: 10
//   }
// });
