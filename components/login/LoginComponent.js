import React, {useState, useEffect} from "react"
import { Text, TextInput, View, TouchableOpacity} from "react-native"
import Style from "../style/style"

export default (props) =>  {
    
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[msg, setMsg] = useState('');
    const[errorsView, setErrorsView] = useState('');
    
    const login =  () => {
    
        user = {};
        user.password = password;
        user.name = name;
        
        fetch('http://10.0.2.2:8080/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if (response.status < 400) {
                setMsg("User permission acecepted!")
                props.page('register');
            } else {
                setMsg("User permission denied:")
            }

            return response.json()
        })
        .then((json) =>{
            
            if (json && json.message) {

                setErrorsView(getErrorsView(json.message));
                
            }

        })
    };

    function getErrorsView(errorMessage) {
        const errors = errorMessage.split("*");

        if (errors) {

            const errorsText = [];


            errors.forEach(error => {
                errorsText.push(<Text style={Style.errorMessage}>{error}</Text>);
            }) 
            
            return  <View>
                       {errorsText}
                    </View>
            
        }

        return <></>
    }

    return (
        <View style={Style.general}>
            <Text style={Style.title}>Login</Text>
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
                {
                    msg !== "" ? (                
                        <View  style={msg.includes("denied") ? Style.errorResult : Style.successResult}>
                            <Text style={Style.textButton}>{msg}</Text>
                            {errorsView && msg.includes("denied") ? errorsView : null}
                        </View>) 
                        : <></>
                }

            </View>
        </View>
    )

}
    