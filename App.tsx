import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Colors from "./constants/Colors";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  var isConnecte;
  const netAlert = NetInfo.addEventListener((networkState) => {
    isConnecte = networkState.isConnected;
  });
  if (!isLoadingComplete || isConnecte === false) {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <View style={styles.container}>
        <Ionicons name="cloud-offline-outline" size={100}/>
        <Text style={styles.errorText}>something goes wrong.</Text>
        </View>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.mainColor,
    justifyContent: "center",
    padding: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  errorText:{
    padding:8,
    fontSize:18,
    color:Colors.light.text
  }
});
