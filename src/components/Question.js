import React from 'react'
import { View,Image,StyleSheet,Text} from 'react-native'
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/800;
const Question = () => {
   

return(
    <View>
    <Text style={styles.questionText}>The road is most slippery when?</Text>   
    <Image 
    source={require("../assets/car.jpg")}
    style={styles.questionImage}
    /> 
    </View>
)
}
const styles = StyleSheet.create({
    questionText:{
fontWeight:'700',
fontSize:40,
color:'black',
textAlign:'center'
    },
    questionImage : {
        width: "100%",
        height: 362 * ratio, //362 is actual height of image
        borderRadius:6,
        marginTop:30
    }
})

export default Question