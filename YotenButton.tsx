import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useYotenStudySession } from "./useYotenStudySession";
import type { YotenSessionParams } from "./useYotenStudySession";

const placeholderData = {
  languageCode: "ko",
  durationMinutes: 20,
  description: "TOPIK vocabulary practice",
  activityId: "18",
};

export const YotenButton = (urlParams: YotenSessionParams) => {
  const navigation = useNavigation();
  const { buildSessionUrl } = useYotenStudySession();

  //Use urlParams
  const url = buildSessionUrl(placeholderData);

  const startSession = () => {
    navigation.navigate("YotenSessionView", { url });
  };

  return <Button title="Track session in Yoten" onPress={startSession} />;
};
