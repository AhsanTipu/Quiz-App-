import React, { useState } from 'react'
import { View,StyleSheet,Text,TouchableOpacity, Image} from 'react-native'
import ChoiceData from "../utils/data"
import  Icon  from 'react-native-vector-icons/dist/FontAwesome'

const Choices = () => {
//     const [choiceButton, setchoiceButton] = useState(false)
// var StyleClass= styles.normal;
// const changeActive = () =>{
//     setchoiceButton(!choiceButton)
//     if(choiceButton == true){
// StyleClass= styles.hoverBorder
//     }
//     else{
//         StyleClass= styles.normal
//     }
// }
    return(
   <View>
    {/* {
        ChoiceData.map((data)=>{
            return( */}
                <View>
<TouchableOpacity style={styles.choiceBtn}>
    <Text  style={styles.optionText}>A.  <Text style={styles.choiceValue}>2 hours after Rain</Text> </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.hoverBorder}>
    <Text  style={styles.selectedoptionText}>B.  <Text style={styles.choiceValue}>Immediately after rain</Text></Text>
    <Image source={require("../assets/tick.png")}/>
</TouchableOpacity>
<TouchableOpacity style={styles.choiceBtn}>
    <Text  style={styles.optionText}>C.  <Text style={styles.choiceValue}>The next day</Text></Text>
</TouchableOpacity>
<TouchableOpacity style={styles.choiceBtn}>
    <Text  style={styles.optionText}>D.  <Text style={styles.choiceValue}>None of the above</Text></Text>
</TouchableOpacity>
</View>
                
   </View>
)
}

const styles= StyleSheet.create({
 
    normal:{
borderColor:'white'
    },
    choiceBtn:{
padding:20,
justifyContent:'center',
marginTop:30
    },
    hoverBorder:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
marginTop:30,
        borderWidth:2,
borderColor: '#0bc763',
borderRadius:8,
color:'#0bc763',
    },
    selectedoptionText:{
        color: '#0bc763',
        fontWeight: '600',
        fontSize:20,
            },
    optionText:{
color: 'darkgray',
fontWeight: '600',
fontSize:20,
    },
    choiceValue:{
fontSize:20,
paddingLeft:20,
    },
    container:{
        padding:20,
    }
})
export default Choices