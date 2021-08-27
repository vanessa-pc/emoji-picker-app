import { useState } from "react";
import Emojis from "./Emojis";
// import './Emoji.css'

export default function EmojiPicker(): JSX.Element {

  const [storedEmoji, setstoredEmoji] = useState<string[]>([]);

  const handleStoredEmoji = (emoji: string) => {
    setstoredEmoji((emojis) => [...emojis, emoji]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Please pick an emoji from below:</p>
      <div>
        {Emojis.map(function (emoji, index) {
          return (
            <button onClick={() => handleStoredEmoji(emoji)} key={index}>
              {emoji}
            </button>
          );
        })}
      </div>
      <p>You picked: {storedEmoji[storedEmoji.length-1]}</p>
      <p>Your previously picked emojis: {storedEmoji}</p>
    </>
  );
}
