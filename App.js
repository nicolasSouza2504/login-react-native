import React, { useState } from "react"
import { View, Text} from "react-native"
import LoginComponent from "./components/login/LoginComponent"
import RegisterComponent from "./components/register/RegisterComponent"

export default () => {

    const [page, setPage] = useState("register");

    return  <View>
                {
                    "login" === page ? <LoginComponent page={setPage}/> : <RegisterComponent/> 
                }
            </View>
}