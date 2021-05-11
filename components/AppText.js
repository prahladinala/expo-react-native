// import React from 'react'
// import { Text } from 'react-native'

// function AppText(props) {
//     return (
//         <Text>{props.children}</Text>
//     )
// }
// export default AppText

//OR DESTRUCTURE THE PROPS

import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

function AppText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
export default AppText

