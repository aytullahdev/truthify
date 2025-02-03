import { createContext, useState } from "react";

import { LoaderIcon } from "lucide-react";
export type Session = {
  access_token: string;
  user: {
    id: string;
    email: string;
    user_metadata: {
      full_name: string;
      avatar_url: string;
    };
  };
};
export const SessionContext = createContext<{
  session: Session | null;
  logOut: () => Promise<void>;
  user: { email: string; id: string; name: string; avatar: string };
}>({
  session: null,
  logOut: async () => {},
  user: { email: "", id: "", name: "", avatar: "" },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    id: string;
    name: string;
    avatar: string;
  }>({
    email: "",
    id: "",
    name: "",
    avatar: "",
  });

  const clearSession = async () => {
    setSession(null);
    setUser({
      email: "",
      id: "",
      name: "",
      avatar: "",
    });
  };

  return (
    <SessionContext.Provider
      value={{
        session: session,
        logOut: clearSession,
        user,
      }}
    >
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderIcon className="size-6 animate-spin" />
        </div>
      ) : (
        children
      )}
    </SessionContext.Provider>
  );
};
