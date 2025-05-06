import Applayout from "../../appLayout/Applayout";
import Dbdisplay from "./Dbdisplay";

export default function Dashboard() {
  return (
    <div>
      <Applayout>
        <Dbdisplay />
      </Applayout>
    </div>
  );
}
