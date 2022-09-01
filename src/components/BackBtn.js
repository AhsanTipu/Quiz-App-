import React from 'react'
import { TouchableOpacity,View,StyleSheet,Text} from 'react-native'

const BackBtn = () => {
return(
  <TouchableOpacity style={styles.Buttonback}>
<Text style={styles.BackText}>Back</Text>
  </TouchableOpacity>
)
}

const styles= StyleSheet.create({
   BackText:{
fontWeight:'600',
color:'darkgray',
fontSize:18,
textAlign:'center'
   },
   Buttonback:{
    backgroundColor: 'lightgray',
    borderRadius:10,
    paddingLeft:40,
    paddingRight:40,
    paddingTop:15,
    paddingBottom:15
   }
})
export default BackBtn