import { useEffect, useContext } from "react";

import { SearchContext } from "../../context";

import { VoiceIcon } from "../icons";

const VoiceSearch = () => {
  const { setVoiceSearch, searchQuery, setSearchQuery, setSearch } =
    useContext(SearchContext);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();

  recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    setSearchQuery(text);
  });
  recognition.interimResults = true;

  useEffect(() => {
    setSearchQuery("");
    recognition.start();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (searchQuery === "") return;
    const currentText = searchQuery;

    const timeout = setTimeout(() => {
      if (currentText !== searchQuery) return;
      recognition.stop();
      setVoiceSearch(false);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      recognition = undefined;

      setSearch(true);
    }, 3000);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className="fixed z-[10000] inset-0 grid place-items-center animate-fade-in">
      <div
        onClick={() => setVoiceSearch(false)}
        className="fixed z-[10040] top-0 left-0 w-full h-full bg-black bg-opacity-40 dark:bg-opacity-60 transition-opacity duration-300"
      ></div>

      <div className="fixed z-[100000] inset-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-6 w-[90%] md:w-[500px] h-max bg-gray-100 dark:bg-neutral-900 rounded-xl transition-all duration-300">
        <div className="flex items-center justify-center">
          <div className="grid place-items-center py-8 px-8 bg-neutral-300 dark:bg-neutral-800 animate-pulse rounded-full">
            <VoiceIcon className="w-20 h-20 icon" />
          </div>
        </div>

        <p className="max-h-40 font-medium text-lg text-center mt-5 overflow-auto">
          {searchQuery}
        </p>
      </div>
    </div>
  );
};

export default VoiceSearch;
