"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Workout } from "@/types/workout";

type WorkoutStateContextValue = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
};

const WorkoutStateContext =
  createContext<WorkoutStateContextValue | null>(null);

type WorkoutStateProviderProps = {
  children: ReactNode;
};

export function WorkoutStateProvider({
  children,
}: WorkoutStateProviderProps) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  function loadStoredWorkouts() {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch {
      localStorage.removeItem("fitlog-plan");
      localStorage.removeItem("fitlog-saved");
    } finally {
      setIsLoaded(true);
    }
  }

  const timeoutId = window.setTimeout(loadStoredWorkouts, 0);

  return () => {
    window.clearTimeout(timeoutId);
  };
}, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isLoaded]);

  function isInPlan(id: number) {
    return plan.some((workout) => workout.id === id);
  }

  function isSaved(id: number) {
    return saved.some((workout) => workout.id === id);
  }

  function addToPlan(workout: Workout) {
    if (isInPlan(workout.id)) {
      return false;
    }

    if (plan.length >= 5) {
      return false;
    }

    setPlan((currentPlan) => [...currentPlan, workout]);
    return true;
  }

  function saveWorkout(workout: Workout) {
    if (isSaved(workout.id)) {
      return false;
    }

    setSaved((currentSaved) => [...currentSaved, workout]);
    return true;
  }

  return (
    <WorkoutStateContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </WorkoutStateContext.Provider>
  );
}

export function useWorkoutState() {
  const context = useContext(WorkoutStateContext);

  if (!context) {
    throw new Error(
      "useWorkoutState must be used inside WorkoutStateProvider"
    );
  }

  return context;
}