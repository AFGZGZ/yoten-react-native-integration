import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useYotenStudySession } from "./useYotenStudySession";
import type { YotenSessionParams } from "./useYotenStudySession";

export const YotenButton = (urlParams: YotenSessionParams) => {
  const navigation = useNavigation();
  const { buildSessionUrl } = useYotenStudySession();

  const url = buildSessionUrl(urlParams);

  const logSession = () => {
    navigation.navigate("YotenSessionView", { url });
  };

  return <Button title="Track session in Yōten" onPress={logSession} />;
};
