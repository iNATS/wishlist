import { WebView } from "react-native-webview";

export default function TabTwoScreen() {
  return (
    <WebView
      source={{ uri: "http://wishlist.dz/?page_id=12" }}
      allowsFullscreenVideo
      allowsBackForwardNavigationGestures
      scalesPageToFit={true}
      startInLoadingState={true}
      bounces={true}
      dataDetectorTypes={"phoneNumber"}
      geolocationEnabled={true}
      allowFileAccess={true}
      originWhitelist={["*"]}
    />
  );
}

