
import { useEffect, useState } from "react";
import "./RotatingHeadline.css";

const roles = [
  "Full-Stack Developer",
  "Backend Developer",
  "Software Developer",
  "Problem Solver",
];

function RotatingHeadline() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      // Pause after completing a phrase
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1400);
    } else if (isDeleting && displayedText === "") {
      // Move to the next phrase
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Type or delete one character
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }, isDeleting ? 45 : 90);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <h2 className="rotating-headline">
      I'm a <span>{displayedText}</span>
      <span className="typing-cursor" aria-hidden="true"></span>
    </h2>
  );
}

export default RotatingHeadline;
