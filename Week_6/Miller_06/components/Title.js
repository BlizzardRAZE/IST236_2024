import {Text, StyleSheet} from "react-native"
import Colors from "../constants/Colors"

// Function to structure Title 
function Title(props){
    // Show Text 
    return <Text style = {styles.title}>{props.children}</Text>
}

// Export to different files
export default Title

// Configure Style for Text => Title
const styles = StyleSheet.create({
    title:{
        fontSize:50,
        textAlign:"center",
        color:Colors.primary500,
        fontFamily:"libreBaskerVilleBold",
    }
})