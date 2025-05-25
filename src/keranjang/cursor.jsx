import React, { useEffect, useState } from "react";

const CursorTextTrail = ({ text = "havis" }) => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const id = Date.now();
      const newTrail = {
        id,
        x: e.clientX,
        y: e.clientY,
      };
      setTrail((prev) => [...prev, newTrail]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((t) => t.id !== id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((t, i) => (
        <span
          key={t.id}
          className="cursor-text"
          style={{
            left: t.x,
            top: t.y,
            animation: "fadeOut 0.5s forwards",
          }}
        >
          {text}
        </span>
      ))}
    </>
  );
};

export default CursorTextTrail;
