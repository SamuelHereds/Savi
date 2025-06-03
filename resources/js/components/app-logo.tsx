import AppLogoIcon from "./app-logo-icon";

export default function AppLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#1D1D1B] w-8 h-8 flex items-center justify-center rounded-md">
        <AppLogoIcon className="w-15 h-15 text-white" />
      </div>
      <span className="text-sm font-semibold text-black">
        Savi Administrativo
      </span>
    </div>
  );
}
