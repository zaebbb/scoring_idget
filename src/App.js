import React, {useEffect, useState} from "react";
import "./Components/Shared/Styles/Style.css"

import Header from "./Components/Header";
import MainContent from "./Components/Content/ContentMain";

function App() {

    const [typeHeader, setTypeHeader] = useState("start")
    const [viewStartPage, setViewStartPage] = useState(false)

  return (
    <>
      <Header
          setHeader={setTypeHeader}
          type={typeHeader}
          setViewStartPage={setViewStartPage}
          viewDate={viewStartPage}
      />

      <div className="widget__content">
        <MainContent
            removeExit={setViewStartPage}
            contentExit={viewStartPage}
            setHeader={setTypeHeader}
        />
      </div>
    </>
  );
}

export default App;
