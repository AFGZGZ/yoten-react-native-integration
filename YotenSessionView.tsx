import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";

//Injected js for "fake" dark mode

export const YotenSessionView = () => {
  const route = useRoute();
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        // injectedJavaScript={`
        //     const style = document.createElement('style');
        //     style.innerHTML = \`
        //       html {
        //         filter: invert(1) hue-rotate(180deg);
        //         background: #000;
        //       }

        //       img, video {
        //         filter: invert(1) hue-rotate(180deg);
        //       }
        //     \`;
        //     document.head.appendChild(style);
        //     true;
        //   `}
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
