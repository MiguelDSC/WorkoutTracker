import React from "react";

export type WorkoutItem = {
  id: number;
  name: string;
  setList: setList;
};

export type setList = {
  id: number;
  set: workoutSet[];
};

export type workoutSet = {
  id: number;
  previous: string | null;
  kg: number;
  reps: number;
  save: boolean;
};

const upperChest = {
  excersize_1: {
    id: 1,
    name: "incline press",
    setList: {
      id: 1,
      sets: [
        {
          id: 1,
          previous: "7kg x 10",
          kg: "",
          reps: "",
          save: "",
        },
      ],
    },
  },
};
