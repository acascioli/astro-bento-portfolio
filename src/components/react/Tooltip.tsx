import React, { useState, Children } from "react";

type Props = {
  children: React.ReactNode;
};

const Tooltip: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Hi there!",
    "Clicked again?",
    "Still here?",
    "Persistent, aren't you?",
    "What's up?",
    "Again? Really?",
    "You're curious!",
    "Not cool!",
    "Give it a break!",
    "That's annoying!",
    "Hands off!",
    "No more clicks!",
    "Seriously?!",
    "Ouch! That hurts!",
    "You're persistent!",
    "Why the curiosity?",
    "I'm getting tired!",
    "I'm bored!",
    "Enough's enough!",
    "Find another hobby!",
    "Stop, please!",
    "Okay, last one!",
    "That's it, I'm done!",
  ];

  const currentMessage = () =>
    clickCount >= messages.length ? messages[messages.length - 1] : messages[clickCount];

  const handleClick = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setClickCount((prev) => prev + 1);
    }
  };

  // const arrayChildren = Children.toArray(children);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseDown={handleClick}
        onMouseUp={() => setIsVisible(false)}
        onTouchStart={handleClick}
        onTouchEnd={() => setIsVisible(false)}
      >
        {children}

        {/* {React.Children.map(arrayChildren, (child, idx) => */}
        {/*   idx === 0 ? <div>{child}</div> : null */}
        {/* )} */}


      </div>

      {isVisible && (
        <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-max max-w-xs bg-background dark:bg-slate-800 text-sm px-3 py-2 rounded-lg shadow-lg z-10">
          <p className="whitespace-normal">{currentMessage()}</p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-background dark:bg-slate-800 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
