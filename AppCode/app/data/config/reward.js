import RewardContext from "./rewardcontext";
import { useContext } from "react";
import getLessons from "../../api/lessons";

// const rewardConfig = {
//   ActivityRepeat: 0.1,
//   SongRepeat: 0.1,
//   Trophies: [
//     {
//       Description: "",
//       Name: "Golden Microphone",
//       ScoreThrehold: 1000,
//       Url: "https://malstorecdn.azureedge.net/assets/trophy/golden_mic.png",
//       _id: 1,
//     },
//   ],
//   _id: 1,
// };

export default useRewardConfig = () => {
  const { rewardConfig, setRewardConfig } = useContext(RewardContext);

  const getRewardConfig = async () => {
    const response = await getLessons();
    if (response == null) return null;

    const config = response.data[0].RewardConfig;

    setRewardConfig(config);
    return config;
  };

  const getActivityRepeatPoint = async () => {
    if (rewardConfig === undefined) {
      getRewardConfig().then((response) => {
        if (response != null) return response.config?.ActivityRepeat;
        else return null;
      });
    } else {
      return rewardConfig.ActivityRepeat;
    }
  };
  return { getActivityRepeatPoint, getRewardConfig, rewardConfig };
};
