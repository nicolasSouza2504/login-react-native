import React, {useState} from "react"
import { Text, TextInput, View, TouchableOpacity} from "react-native"
import Style from "./style/style"

export default function Login() {
    
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[msgReturn, setMsgReturn] = useState('');
    const[validations, setValidations] = useState('');
    
    const login =  () => {
    
        user = {};
        user.password = password;
        user.name = name;
        
        fetch('http://10.0.2.2:8080/user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(user)
        })
        .then((response) => {
            
            if (response.status < 400) {
                setMsgReturn("User permission acecepted")
            } else {
                setMsgReturn("User permission denied")
            }

            return response.json()
        })
        .then((json) =>{
            if (msgReturn.includes("denied")) {
                setValidations(JSON.stringify(json));
            }
        })
    };

    return (
        <View style={Style.general}>
            <Text style={Style.title}>Login Example</Text>
            <View style={Style.formContext}>
                <View style={Style.form}>
                    <Text style={Style.label}>Name</Text>
                    <TextInput
                        style={Style.input}
                        onChangeText={setName}
                        placeholder="Name"
                        value={name}
                        keyboardType="visible-password"
                    />
                    <Text style={Style.label}>Password</Text>
                    <TextInput
                        style={Style.input}
                        onChangeText={setPassword}
                        placeholder="Password"
                        value={password}
                        keyboardType="visible-password"
                        />
                </View>
                <TouchableOpacity style={Style.button} onPress={() => login()}>
                    <Text style={Style.textButton}>Login</Text>
                </TouchableOpacity>
                <View style={msgReturn.includes("denied") ? Style.errorResult : Style.successResult}>
                    <Text style={Style.textButton}>{msgReturn}:</Text>
                    <Text style={Style.textButton}>{validations}</Text>
                </View>
            </View>
        </View>
    )

}
    