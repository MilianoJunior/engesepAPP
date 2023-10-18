import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux'

import Composite from './src/composite'

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaView style={{flex: 1 , backgroundColor:"#181A20"}}>
          <Composite />
          <StatusBar style="auto" />
        </SafeAreaView>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// git remote add origin https://github.com/MilianoJunior/engesepAPP.git
// git branch -M main
// git push -u origin main

// echo "# react-native-redux" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin link
// git push -u origin main
