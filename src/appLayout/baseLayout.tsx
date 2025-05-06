import { Outlet } from "react-router-dom";

import Footer from "../website/Footer";
import Navbar from "../website/navbar";

export default function Baselayout() {
  return (
    <main className="">
      <Navbar />
      <section className="">
        <Outlet />
      </section>
      <div>
        <Footer />
      </div>
    </main>
  );
}
