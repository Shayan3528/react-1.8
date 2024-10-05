// import Shayan from "./component/Gallery";
// import { Profile } from "./component/Gallery";
// import { JsxSyntext } from "./component/Test";
import Parent from "./component/Profile";

export default function App() {

  const person = "Tamim";
  const age = 38;
  const size = 39;

  return (
    <div>
      <div>
        <Parent person={person} size={size} age={age} />
      </div>
    </div>
  );
}
