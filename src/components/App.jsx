import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      symbol={emoji.emoji}
      name={emoji.name}
      desc={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <div>
        <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
      </div>
    </div>
  );
}

export default App;
