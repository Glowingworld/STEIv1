import { useState, useEffect } from "react";

let getWardLocations = (district) => {
  let localDistricLocation = {};
  const [ward, setWard] = useState([]);

  useEffect(() => {
    if (!district) {
      setWard([]);
    } else if (localDistricLocation[district]) {
      setWard(localDistricLocation[district]);
    } else {
      requestDistrict();
    }

    async function requestDistrict() {
      setWard([]);
      try {
        const res = await fetch(
          `http://localhost:8046/street?district=${district}`
        );

        const _ward = await res.json();
        console.log(_ward);
        localDistricLocation[district] = _ward;
        setWard(localDistricLocation[district]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [district]);

  return [ward];
};

export default getWardLocations;
