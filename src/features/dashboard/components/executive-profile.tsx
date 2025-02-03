import { ExecutiveProfileType } from "../types";

// ExecutiveProfile.tsx
export const ExecutiveProfile = ({
  name,
  role,
  companyLogo,
  profileImage,
}: ExecutiveProfileType) => {
  return (
    <div className="flex flex-row justify-between items-center pt-10">
      <div className="flex flex-row  space-x-5 items-center">
        <img
          src={profileImage}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold text-[#292929]">{name}</p>
          <p className="text-sm text-[#292929]/60">{role}</p>
        </div>
      </div>
      <div>
        <img src={companyLogo} alt="microsoft" className="w-12 h-12" />
      </div>
    </div>
  );
};
