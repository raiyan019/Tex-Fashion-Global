import { useState } from "react";
import { company } from "../data/company.js";

// Shows the logo image. If the file is missing it falls back to the text wordmark,
// so a missing logo never shows as a broken image. Colour is inherited.
function Logo({
  src,
  imgClassName = "h-10 w-auto",
  textClassName = "text-[1.45rem] font-medium",
  tagline = false,
  priority = false,
}) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={src}
        alt={company.name}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        onError={() => setFailed(true)}
        className={imgClassName}
      />
    );
  }

  return (
    <span className="flex flex-col leading-none">
      <span className={`font-display tracking-tight ${textClassName}`}>
        {company.name}
      </span>
      {tagline && (
        <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.28em] opacity-60">
          {company.city} · {company.country}
        </span>
      )}
    </span>
  );
}

export default Logo;
