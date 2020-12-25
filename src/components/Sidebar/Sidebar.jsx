import { useSelector } from "react-redux";
import { getSideNavExpand } from "../../selectors/settings";
import AppTitle from "./AppTitle";
import SideNav from "./SideNav";
import UserInfo from "./UserInfo";
import UserOptions from "./UserOptions";

export default function Sidebar() {
  const sideNavExpand = useSelector((state) => getSideNavExpand(state));

  return (
    <nav
      className={`flex flex-col bg-white dark:bg-indigo-900 pb-6 shadow-md z-50 transform ease-in-out ${
        sideNavExpand ? "w-80" : "w-20"
      }`}
    >
      <AppTitle />
      <div
        className={`flex flex-col bg-white dark:bg-indigo-900 pt-4 ${
          sideNavExpand ? "px-6" : "px-3"
        }`}
      >
        <UserInfo />
        <UserOptions />
        <SideNav />
      </div>
    </nav>
  );
}
