import React, { useEffect, useState } from "react";
import axios from "./utils";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [textDebounced, setTextDebounced] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTextDebounced(text);
    }, 500);
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.postTranslation();
      setTranslated(data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, textDebounced]);

  return (
    <div>
      <h1 className="ui header"> {translated} </h1>
    </div>
  );
};

export default Convert;
