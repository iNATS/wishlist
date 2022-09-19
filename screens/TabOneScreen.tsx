import { WebView } from "react-native-webview";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
}: RootTabScreenProps<"TabOne">) {
  return (
    <WebView
      source={{ uri: "https://wishlist.dz" }}
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
