import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';
import Btn from '../components/Button';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudents: [],
      presentCount: 0,
      absentCount: 0,
    };
  }
  goToFinalScreen = () => {
    this.props.navigation.navigate(
      'Screen2',
      { absentKids: this.state.absentCount, presentKids: this.state.presentCount  }
    );
  };
  componentDidMount() {
    this.getStudentDetails();
  }

  getStudentDetails() {
    var dbref = db.ref('MySchoolName/XIClassA');
    dbref.on('value', (data) => {
      var studentList = data.val();
      var myList = [];
      for (var i in studentList) {
        myList.push(studentList[i]);
      }
      this.setState({ allStudents: myList });
      console.log(myList);
    });
  }

  updateAttendence(rollno, status) {
    var id = '';
    if (rollno <= 9) {
      id = '0' + rollno;
    } else {
      id = rollno;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        {this.state.allStudents.map((student) => (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginLeft: 10, flex: 0.3, marginTop: 20 }}>
              <Text>{student.name}</Text>
            </View>

            <View style={{ flex: 0.3, marginTop: 20 }}>
              <Button 
              color="green" 
              title="Present"
              onPress={() => {
                  this.setState({ presentCount: this.state.presentCount + 1 });
                }}
               />
            </View>

            <View style={{ marginLeft: 40, flex: 0.3, marginTop: 20 }}>
              <Button
                color="red"
                title="Absent"
                onPress={() => {
                  this.setState({ absentCount: this.state.absentCount + 1 });
                }}
              />
            </View>
          </View>
        ))}

        <View style={{ flex: 0.3, marginTop: 20 }}>
          <Button
            color="purple"
            title="Submit"
            onPress={() => {
              this.goToFinalScreen();
            }}
          />
        </View>
      </View>
    );
  }
}
