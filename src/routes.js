import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Main from "./pages/main"
import Login from "./pages/login"
import User from "./pages/user"

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        title: "Login",
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: "#9e54e8ff"
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                            color: "#FFF"
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}