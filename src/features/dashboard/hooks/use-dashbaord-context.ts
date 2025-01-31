import { useContext } from "react";
import { DashboardContext } from "../context/dashboard-context";

export const useDashboardContext = () => {
  const { setShowDeepAnalytics, showDeepAnalytics } =
    useContext(DashboardContext);
  return { setShowDeepAnalytics, showDeepAnalytics };
};
