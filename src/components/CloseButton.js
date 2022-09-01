import React from 'react'
import { View,TouchableOpacity, Image,StyleSheet,Text} from 'react-native'

const CloseButton = () => {
return(
    <View>
        <TouchableOpacity>
<Image 
source={require("../assets/cancelbutton.png")}
/>
        </TouchableOpacity>
    </View>
)
}


export default CloseButton