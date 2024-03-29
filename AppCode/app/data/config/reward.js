import RewardContext from "./rewardcontext";
import { useContext } from "react";
import getLessons from "../../api/lessons";

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
      const response = await getLessons();
      return response.data[0].RewardConfig.ActivityRepeat;
    } else {
      return rewardConfig.ActivityRepeat;
    }
  };

  const getSongRepeatPoint = async () => {
    if (rewardConfig == undefined) {
      const response = await getLessons();
      return response.data[0].RewardConfig.SongRepeat;
    } else {
      return rewardConfig.SongRepeat;
    }
  };
 
  const getTrophies = async () => {
    if (rewardConfig === undefined) {
      const response = await getLessons();
      return response.data[0].RewardConfig.Trophies;
    } else {
      return rewardConfig.Trophies;
    }
  };

  return { getActivityRepeatPoint, getSongRepeatPoint, getRewardConfig, getTrophies, rewardConfig };
};
