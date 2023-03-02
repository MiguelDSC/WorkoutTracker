import { SetInterface } from "../components/SetItem/SetItem";
import { PreviousSet } from "../components/SetList/SetList";

export const WorkoutEnum = {
  UPPER_CHEST: "UPPER_CHEST",
  UPPER_BACK: "UPPER_BACK",
  LEGS: "LEGS",
} as const;

export type WorkoutEnum = typeof WorkoutEnum[keyof typeof WorkoutEnum];

const tempWorkoutArray: SetInterface[] = [
  {
    WorkoutType: WorkoutEnum.UPPER_CHEST,
    workoutId: 1,
    setId: 1,
    kg: 11,
    reps: 4,
  },
  {
    WorkoutType: WorkoutEnum.UPPER_CHEST,
    workoutId: 1,
    setId: 2,
    kg: 22,
    reps: 4,
  },
  {
    WorkoutType: WorkoutEnum.UPPER_CHEST,
    workoutId: 1,
    setId: 3,
    kg: 33,
    reps: 4,
  },
  {
    WorkoutType: WorkoutEnum.UPPER_CHEST,
    workoutId: 1,
    setId: 4,
    kg: 44,
    reps: 4,
  },

  {
    WorkoutType: WorkoutEnum.UPPER_CHEST,
    workoutId: 2,
    setId: 1,
    kg: 13,
    reps: 4,
  },
  {
    WorkoutType: WorkoutEnum.UPPER_CHEST,
    workoutId: 2,
    setId: 2,
    kg: 22,
    reps: 4,
  },
];

export const getPreviousSets = async (
  incomingWorkoutType: WorkoutEnum,
  incomingWorkoutItemId: number
): Promise<PreviousSet> => {
  const first = tempWorkoutArray.find(
    (set) =>
      set.WorkoutType == incomingWorkoutType &&
      set.workoutId == incomingWorkoutItemId &&
      set.setId == 1
  );

  const second = tempWorkoutArray.find(
    (set) =>
      set.WorkoutType == incomingWorkoutType &&
      set.workoutId == incomingWorkoutItemId &&
      set.setId == 2
  );

  const third = tempWorkoutArray.find(
    (set) =>
      set.WorkoutType == incomingWorkoutType &&
      set.workoutId == incomingWorkoutItemId &&
      set.setId == 3
  );

  const fourth = tempWorkoutArray.find(
    (set) =>
      set.WorkoutType == incomingWorkoutType &&
      set.workoutId == incomingWorkoutItemId &&
      set.setId == 4
  );

  return [first || null, second || null, third || null, fourth || null];
};
