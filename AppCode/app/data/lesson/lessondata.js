import LessonContext from "./lessoncontext";
import { useContext } from "react";
import { getActivityStatus, updateActivityStatus } from "../../api/status";
import getLessons from "../../api/lessons";

export default useLesson = () => {
  const { status, setStatus } = useContext(LessonContext);
  const { playStateChanged, setPlayStateChanged } = useContext(LessonContext);

  const STATUS_COMPLETED = 10;

  //
  //  Purpose: Check whether all activities under a lesson are compelted
  //  Return : True or False
  //
  const isLessonCompleted = (lesson) => {
    const percentage = getLessonProgress(lesson);

    if (percentage === 100) {
      return true;
    } else {
      return false;
    }
  };

  //
  //  Purpose: To indicate whether the activity play state change to decide to show congrats msg again or not
  //  Return : N/A
  //
  const onPlayStateChanged = (state) => {
    setPlayStateChanged(state);
  };

  //
  //  Purpose: Retrive the specified activity completion status for a given lesson
  //  Return: 0 ~ 10 (10 is 100%)
  //
  const getActivityProgress = (lessonId, activityId) => {
    try {
      let completionStatus = 0;

      if (status === undefined) return;

      const activity = status.filter(
        (item) => item.ActivityId == activityId && item.LessonId == lessonId
      );

      completionStatus =
        activity[0]?.CompletionStatus == null
          ? 0
          : activity[0].CompletionStatus;

      return completionStatus;
    } catch (error) {
      console.log(error);
    }
  };

  //
  //  Purpose: Retrive the total completion rate for a given lesson
  //  Return: 0 ~ 10 (10 is 100%)
  //
  const getLessonProgress = (lesson) => {
    try {
      let lessonStatus = 0;

      if (status === undefined) return 0;

      const activity = status.filter((item) => item.LessonId == lesson._id);

      const completionStatus = activity.map((item) => {
        return item.CompletionStatus;
      });

      const completedStatus = completionStatus.reduce(
        (totalCompleted, activityStatus) => {
          // Increment if an activity was completed (10 == 100%)
          if (activityStatus == STATUS_COMPLETED)
            totalCompleted = totalCompleted + 1;

          return totalCompleted;
        },
        0
      );

      let acitivityCount = lesson.Activities.length;
      acitivityCount = acitivityCount === undefined ? 0 : acitivityCount;

      lessonStatus = Math.round((completedStatus / acitivityCount) * 100);

      if (isNaN(lessonStatus)) lessonStatus = 0;

      return lessonStatus;
    } catch (error) {
      console.log(error);
    }
  };

  //
  //  Purpose: fetch all lesson data from server (HTTPS GET)
  //  Return: response object from servie endpoint
  //
  const fetchAllLessonData = async () => {
    const response = await getLessons();
    return response;
  };

  //
  //  Purpose: fetch all activity progress data from server (HTTPS GET)
  //  Return: response object from servie endpoint
  //
  const fetchStatusData = async () => {
    const response = await getActivityStatus();

    if (response === null) {
      return null;
    } else {
      setStatus(response.data);
      return response;
    }
  };

  //
  //  Purpose: Post activity progress data to server (HTTPS POST)
  //  Return: response object from servie endpoint
  //
  const updateStatusData = async (data) => {
    const response = await updateActivityStatus(data);

    if (response === null) {
      return null;
    } else {
      return response;
    }
  };

  return {
    playStateChanged,
    status,
    fetchAllLessonData,
    fetchStatusData,
    getActivityProgress,
    getLessonProgress,
    isLessonCompleted,
    onPlayStateChanged,
    updateStatusData,
  };
};
