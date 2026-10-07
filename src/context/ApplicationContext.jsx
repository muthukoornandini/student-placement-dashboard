import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ApplicationContext = createContext();

function ApplicationProvider({ children }) {
  const [applications, setApplications] = useLocalStorage(
    "placementApplications",
    []
  );

  const addApplication = (job) => {
    setApplications((previousApplications) => {
      const alreadyExists = previousApplications.some(
        (application) =>
          application.company === job.company &&
          application.role === job.role
      );

      if (alreadyExists) {
        return previousApplications;
      }

      return [
        ...previousApplications,
        job,
      ];
    });
  };

  const updateApplicationStatus = (id, newStatus) => {
    setApplications((previousApplications) =>
      previousApplications.map((application) => {
        if (application.id !== id) {
          return application;
        }

        if (newStatus === "Interview Scheduled") {
          return {
            ...application,
            status: newStatus,
            interviewDate:
              application.interviewDate !== "Not Scheduled"
                ? application.interviewDate
                : "October 10, 2026 • 10:00 AM",
          };
        }

        return {
          ...application,
          status: newStatus,
        };
      })
    );
  };

  const removeApplication = (id) => {
    setApplications((previousApplications) =>
      previousApplications.filter(
        (application) => application.id !== id
      )
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplicationStatus,
        removeApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationProvider;