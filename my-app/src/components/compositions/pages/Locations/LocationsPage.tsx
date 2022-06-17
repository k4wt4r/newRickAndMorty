import { ILocation } from "@/src/interfaces";
import React, { useState, useEffect } from "react";

type Props = {};

const LocationsPage = (props: Props) => {
  const [locations, setLocations] = useState<ILocation[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/location/");
      const data = await response.json();
      setLocations(data.results);
    })();
  }, []);

  return <div></div>;
};

export default LocationsPage;
