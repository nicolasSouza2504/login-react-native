import React, { useState } from "react";
import { View, Text } from "react-native";
import { DataTable } from 'react-native-paper'; 
import Style from "../style/style"
import { StyleSheet } from "react-native";

export default () => {
    
    const [rows, setRows] = useState([]);

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

    function setUserRows(data) {
        
        if (data && data.length) {
            
            const users = [];

            data.forEach(user => {
                users.push
                        (    
                                <DataTable.Row>
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
                    <View style={Style.formContext}>
                        <DataTable>
                            <DataTable.Header style={Style.label}>
                                <DataTable.Title>Name</DataTable.Title>
                                <DataTable.Title>Creation Date</DataTable.Title>
                            </DataTable.Header>
                            {rows}
                        </DataTable>
                    </View>
            </View>
}