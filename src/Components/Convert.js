import React, { useEffect, useState } from "react";
import axios from "./utils";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.postTranslation();
      setTranslated(data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header"> {translated} </h1>
    </div>
  );
};

export default Convert;
