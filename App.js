import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';


export default function App() {
    const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;
  return (
      <>
        <WebView
            style={styles.container}
            source={{ uri: 'https://olay.az/' }}
            injectedJavaScriptBeforeContentLoaded={runFirst}
        />
        <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    }
});