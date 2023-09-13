import React, { useState, useEffect, createContext } from "react";

// create the context
const BoulderProblemContext = createContext();

// create a provider component
function BoulderProblemProvider({ children }) {

    const [boulderProblems, setBoulderProblems] = useState([])

    useEffect(() => {
        fetch("/boulder_problems")
        .then((r) => {
          if (r.ok) {
            r.json().then((problems) => setBoulderProblems(problems))
          }
        })
      }, []);

  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <BoulderProblemContext.Provider value={{boulderProblems , setBoulderProblems}}>{children}</BoulderProblemContext.Provider>;
}

export { BoulderProblemContext, BoulderProblemProvider };