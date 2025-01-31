import { createContext, useState } from "react";

interface PlotDigitizerProviderProps {
  children: React.ReactNode;
}

export const DashboardContext = createContext({
  showDeepAnalytics: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setShowDeepAnalytics: (_show: boolean) => {},
});

export const DashboardProvider = ({ children }: PlotDigitizerProviderProps) => {
  const [showDeepAnalytics, setShowDeepAnalytics] = useState<boolean>(false);

  return (
    <DashboardContext.Provider
      value={{
        showDeepAnalytics,
        setShowDeepAnalytics,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
