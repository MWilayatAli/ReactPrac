import React, { useCallback, useState, useEffect } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [chr, setchr] = useState(false);
  let [num, setnum] = useState(false);
  let [length, setLength] = useState(8);

  let passwordGenerator = useCallback(() => {
    console.log("passwordGenerator called");
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChar = "!@#$%^&*()_+";
    let numChar = "0123456789";
    let temp = "";

    if (chr) {
      charset += specialChar;
    }
    if (num) {
      charset += numChar;
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      temp += charset.charAt(randomIndex);
    }

    setPassword(temp);
  }, [length, num, chr]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, chr]);

  const handleCopy = () => {
    const input = document.getElementById("passwordInput");
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-4">
        <h1 className="text-4xl md:text-5xl text-center text-white font-bold py-4 px-20 shadow-md rounded-lg bg-black/50">
          Password Generator
        </h1>

        <div className="bg-white shadow-lg rounded-lg mt-6 p-6 max-w-md w-full">
          <div className="flex flex-col items-center">
            <input
              id="passwordInput"
              type="text"
              readOnly
              className="bg-gray-100 w-full p-2 mb-4 text-center border border-gray-300 rounded-lg"
              value={password}
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-4"
              onClick={handleCopy}
            >
              Copy Password
            </button>
          </div>

          <div className="my-4">
            <label className="block text-gray-700 font-medium mb-2">
              Choose length: {length}
            </label>
            <input
              type="range"
              min="8"
              max="20"
              className="w-full cursor-pointer"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked={num}
                onChange={() => setnum((prev) => !prev)}
              />
              <span className="ml-2 text-gray-700">Include numbers</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked={chr}
                onChange={() => setchr((prev) => !prev)}
              />
              <span className="ml-2 text-gray-700">Include special characters</span>
            </label>
          </div>
        </div>

        <footer className="mt-auto text-center text-white text-sm pt-6">
          &copy; 2025 Password Generator | Built with React & Tailwind CSS
        </footer>
      </div>
    </>
  );
}

export default App;
