import React, { useRef, useState, useEffect } from "react";
import ListItemContent from "./ListItemContent";

interface FaqListProps {
  title: string;
  content: string[];
  index: number;
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
}

function ListItem({ title, content, index, active, setActive }: FaqListProps) {
  const isActive = active === index;
  const elementRef = useRef<HTMLDivElement>(null);
  // Recalculate on browser layout change(maybe useLayoutEffect)

  useEffect(() => {
    if (elementRef.current === null) {
      return;
    }
    elementRef.current.style.maxHeight = isActive
      ? elementRef.current.scrollHeight + "px"
      : "0";
    return () => {};
  }, [isActive, content, elementRef.current]);

  const toggle = (index: number) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <div
      onClick={() => {
        toggle(index);
      }}
      className={index === active ? "item-wrapper active" : "item-wrapper"}
    >
      <div>
        <div className="item-title">
          <div className="item-title-container">
            <span>{title}</span>
          </div>
        </div>
        <div className="item-content" ref={elementRef}>
          <ListItemContent index={index} content={content} />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
