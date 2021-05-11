import React from 'react'
import { Text, StyleSheet } from 'react-native'
import styles from './styles'
function AppText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default AppText

