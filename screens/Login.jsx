import React from 'react'
import {View, Text, Button} from 'react-native';
function Login({navigation}) {
    return (
         <View>
             <Text>Heeeeeeee</Text>
             <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />
         </View>
    )
}

export default Login
