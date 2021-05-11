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
        // fontSize: Platform.OS === "android" ? 18 : 20,
        // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })

    }
})
export default AppText

