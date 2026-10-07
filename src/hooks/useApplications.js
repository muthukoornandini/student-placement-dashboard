import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

function useApplications() {
  return useContext(ApplicationContext);
}

export default useApplications;