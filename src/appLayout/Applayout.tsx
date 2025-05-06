import { Outlet } from "react-router-dom";

import Sidenav from "./Sidenav";
import Dbnav from "./Dbnav";

export default function Applayout() {
  return (
    <main className="flex">
      <aside className="w-[15%] bg-white fixed">
        <Sidenav />
      </aside>
      <section className="w-full">
        <Dbnav />
        <Outlet />
      </section>
    </main>
  );
}
