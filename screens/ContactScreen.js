import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore'; 

import { db } from '../Config';

function ContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const [requirement, setRequirement] = useState('');
  const [description, setDescription] = useState('');

  function create () {
    addDoc(collection(db, "users"), {
      name: name,
      email: email,
      phone: phone,
      budget: budget,
      service: service,
      requirement: requirement,
      description: description,
    }).then(() => {
      console.log('data submitted');
    }).catch((error) => {
      console.log(error);
    });  
  }
  function clear () {
    setName('');
    setEmail('');
    setPhone('');
    setBudget('');
    setService('');
    setRequirement('');
    setDescription('');
  }
  function onPress () {
    
    create();
    clear();
  }
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={(name) => {setName(name)}}
              placeholder="Name"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={(email) => {setEmail(email)}}
              placeholder="Email"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              value={phone}
              onChangeText={(phone) => {setPhone(phone)}}
              placeholder="Phone"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              value={budget}
              onChangeText={(budget) => {setBudget(budget)}}
              placeholder="Budget"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              value={service}
              onChangeText={(service) => {setService(service)}}
              placeholder="Service"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              value={requirement}
              onChangeText={(requirement) => {setRequirement(requirement)}}
              placeholder="Requirement"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.descriptionTextInput}
              value={description}
              onChangeText={(description) => {setDescription(description)}}
              placeholder="Description"
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={onPress}
            >
              <Text style={styles.text}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
       </ScrollView>
    </SafeAreaView>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textInput: {
    alignSelf: 'stretch',
    borderWidth: 0.8,
    borderColor: 'grey',
    padding: 10,
    width: '95%',
    borderRadius: 10,
  },
  descriptionTextInput: {
    alignSelf: 'stretch',
    borderWidth: 0.8,
    borderColor: 'grey',
    padding: 30,
    width: '95%',
    borderRadius: 10,
  },
  btnContainer: {
    padding: 20,
    marginHorizontal: '30%', 
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#158484",
    padding: 15,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
