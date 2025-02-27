"use client";

import { LinkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  console.log(clicked);
  return (
    <button
      onClick={handleClick}
      className="flex gap-1 items-center border px-2 py-1 rounded text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Linked copied!" : "Share Link"}
    </button>
  );
}

export default ShareLinkButton;
