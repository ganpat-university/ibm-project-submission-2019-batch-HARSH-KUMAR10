import React from "react";
import Header from "../components/hero/Header";

export default function Translator() {
  const [inputLanguage, setInputLanguage] = React.useState(["english"]);
  const [outputLanguage, setOutputLanguage] = React.useState(["gujarati"]);
  const [selectedInput, setSelectedInput] = React.useState("english");
  const [selectedOutput, setSelectedOutput] = React.useState("gujarati");
  const [inputText, setInputText] = React.useState("");
  const [outputText, setOutputText] = React.useState("");

  // const setValue = () => {
  //   var tempInputLanguage = inputLanguage.filter(
  //     (item) => item !== selectedInput || item !== selectedOutput
  //   );
  //   var tempOutputLanguage = outputLanguage.filter(
  //     (item) => item !== selectedOutput || item !== selectedOutput
  //   );
  //   setInputLanguage(tempInputLanguage);
  //   setOutputLanguage(tempOutputLanguage);
  // };

  // React.useEffect(() => {
  //   setValue();
  // }, []);

  const translateText = () => {
    fetch("/neural/translate", {
      method: "POST",
      body: JSON.stringify({ text: inputText, to: "gu", from: "en" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setOutputText(response);
      });
  };
  return (
    <div>
      <Header />
      <div className="row m-3 justify-content-between">
        <div className="col-1"></div>
        <div className="col-8 row">
          <div className="col-6 p-2">
            <select
              value={selectedInput}
              style={{ width: "100%", padding: 10 }}
              onChange={(e) => {
                setSelectedInput(e.target.value);
              }}
            >
              {inputLanguage.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <br />
            <br />
            <textarea
              rows={12}
              style={{ width: "100%" }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
            <br />
            <br />
            <button
              style={{ padding: 20, width: "100%" }}
              onClick={() => translateText()}
              className="bg-success btn"
            >
              Translate
            </button>
          </div>
          <div className="col-6 p-2">
            <select
              value={selectedOutput}
              style={{ width: "100%", padding: 10 }}
              onChange={(e) => {
                setSelectedOutput(e.target.value);
              }}
            >
              {outputLanguage.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <br />
            <br />
            <textarea
              rows={12}
              style={{ width: "100%" }}
              disabled={true}
              value={outputText}
              onChange={(e) => setOutputText(e.target.value)}
            ></textarea>
            <br />
            <br />
            <button
              style={{ padding: 20, width: "100%" }}
              className="bg-warning btn"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
