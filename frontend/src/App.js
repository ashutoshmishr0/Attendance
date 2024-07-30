import Navbar from "./component/Navbar";
import Service from "./component/Service";
import logo from "./logo.svg";

import Page from "./Page/Page";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Service />
        <Page />
      </div>
    </div>
  );
}

export default App;
