import React,{useState} from 'react'
import { View, Text, StyleSheet, Pressable ,Image} from 'react-native';

export default function DetailsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>

    );
} 

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  text: { fontSize: 18, marginBottom: 10 },
});