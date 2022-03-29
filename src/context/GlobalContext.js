import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// create context
export const GlobalContext = createContext();

// provider
const GlobalProvider = ({ children }) => {
  const [section, setSection] = useState("countdown");
  const [launches, setLaunches] = useState([]);
  const [nextLaunch, setNextLaunch] = useState({});
  const [remainingTime, setRemainingTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //  get upcoming launches

    const getLaunches = async () => {
      setLoading(true);
      const url = `https://api.spacexdata.com/v5/launches/upcoming`;
      const launches = await axios.get(url);

      // filter next launches from today
      const nextLaunches = launches.data.filter((launch) => {
        const launchDate = new Date(launch.date_utc);
        const today = new Date();
        return launchDate >= today;
      });

      // order by date [asc]
      nextLaunches.sort((a, b) => new Date(a.date_utc) - new Date(b.date_utc));

      setLaunches(nextLaunches);
      setLoading(false);
    };

    // get the next launch
    const getNextLaunch = async () => {
      setLoading(true);
      const url = `https://api.spacexdata.com/v5/launches/next`;
      const nextLaunch = await axios.get(url);
      setNextLaunch(nextLaunch.data);
      setLoading(false);
    };
    getLaunches();
    getNextLaunch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        launches,
        section,
        nextLaunch,
        remainingTime,
        loading,
        setRemainingTime,
        setSection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
