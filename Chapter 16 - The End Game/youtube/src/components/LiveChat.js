import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className="w-[500px] h-[550px] ml-9 p-2  bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
          <div>
            {chatMessages.map((c, i) => (
              <ChatMessage name={c.name} message={c.message} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <form
          className="w-[500px] h-[200px] p-2 ml-9 border border-black rounded-b-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Shweta Dokhe",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <img
            className="my-2 ml-5 h-10"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
          <input
            className="w-1/2 p-2"
            type="text"
            placeholder="Say something..."
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="px-2 mx-2 bg-green-200">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
