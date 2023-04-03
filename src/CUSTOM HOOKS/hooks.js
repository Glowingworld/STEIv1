import { useState, useEffect } from "react";

exports.getRegionsLocations = (city) => {
  let localRegionsLocationStore = {};
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (!city) {
      setDistricts([]);
    } else if (localRegionsLocationStore[city]) {
      setDistricts(localRegionsLocationStore[city]);
    } else {
      requestDistricts();
    }

    async function requestDistricts() {
      setDistricts([]);

      const res = await fetch("");

      let _districts = await res.json();
      localRegionsLocationStore[json];
      setDistricts(_districts);
    }
  });

  return [districts];
};

exports.getWardLocations = (district) => {
  let localDistricLocation = {};
  const [ward, setWard] = useState([]);

  if (!district) {
    setWard([]);
  } else if (localDistricLocation[district]) {
    setWard(localDistricLocation[district]);
  } else {
    requestDistrict();
  }
};
