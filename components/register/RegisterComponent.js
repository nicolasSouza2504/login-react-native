import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import { DataTable } from 'react-native-paper'; 
import Style from "../style/style"
import { StyleSheet } from "react-native";

export default () => {
    
    const [rows, setRows] = useState([]);
    const [pressed, setPressed] = useState([]);

    const users = fetch('http://10.0.2.2:8080/user', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then((response) => {
        return response.json()
    })
    .then((json) =>{
        
        if (json) {
            setUserRows(json);
        }

    })

    function handleClick(userId) {
        const pressedArray = [];

        pressedArray.push(userId);
        
        setPressed(pressedArray);

    }

    function isPressed(userId) {

        if (pressed.includes(userId)) {
            return true;
        } else { 
            return false;
        }

    }

    function setUserRows(data) {
        
        if (data && data.length) {
            
            const users = [];

            data.forEach(user => {
                users.push
                        (    
                                <DataTable.Row style={{backgroundColor: isPressed(user.id) ? '#a39e9e' : null}} onPress={ () => handleClick(user.id)}>
                                    <DataTable.Cell>{user.name}</DataTable.Cell>
                                    <DataTable.Cell>{user.creationDate}</DataTable.Cell>
                                </DataTable.Row>
                        )
            });
            
            setRows(users);
        }
      
    }
 
    return  <View style={Style.general}>
                <Text style={Style.title}>Registered Users</Text>
                <View style={Style.gridContext}>
                    <DataTable style={{height: "100%"}}>
                        <DataTable.Header>
                            <DataTable.Title>Name</DataTable.Title>
                            <DataTable.Title>Creation Date</DataTable.Title>
                        </DataTable.Header>
                        <ScrollView>
                            {rows}
                        </ScrollView>
                    </DataTable>
                </View>
                <View style={Style.buttonBar}>
                        <TouchableOpacity style={Style.registerNewUserButton} onPress={() => login()}>
                            <Text style={Style.textButton}>Register new user</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.editUserButton} onPress={() => login()}>
                            <Text style={Style.textButton}>Edit User</Text>
                        </TouchableOpacity>
                </View>
            </View>
            
}