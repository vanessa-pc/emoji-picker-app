import {useState} from 'react';
import Emojis from './Emojis';
// import './Emoji.css'

export default function EmojiPicker(): JSX.Element {
    
    const [pickedEmoji, setPickedEmoji] =
    useState("");

    const [lastEmoji, setLastEmoji] =
    useState<string[]>([]);

  const handlePickedEmoji = (emoji: string) => {
    setPickedEmoji(emoji);
    setLastEmoji((emojis) => [...emojis, emoji]);
  };


    return (
      <>
        <h1>Emoji picker</h1>
        <p>Please pick an emoji from below:</p>
        <div>
        {Emojis.map(function (emoji,index) {
        return <button onClick={() =>handlePickedEmoji(emoji)} key={index} >{emoji}</button>;})}
        </div>
        <p>You picked: {pickedEmoji}</p>
        <p>Your previously picked emojis: {lastEmoji}</p>
      </>
    );
}