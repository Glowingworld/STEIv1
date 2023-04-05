import { useState, useEffect } from "react";

let getRegionsLocations = (city) => {
  let localCache = {};
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (!city) {
      setDistricts([]);
    } else if (localCache[city]) {
      setDistricts(localCache[city]);
    } else {
      requestDistricts();
    }

    async function requestDistricts() {
      // setDistricts([]);

      try {
        const res = await fetch(`http://localhost:8046/district?city=${city}`);

        let _districts = await res.json();
        localCache[city] = _districts;

        setDistricts(localCache[city]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [city]);

  return [districts];
};

export default getRegionsLocations;
