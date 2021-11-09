import React from "react";
import ListItemContent from "./ListItemContent";

interface FaqListProps {
  title: string;
  content: string[];
  index: number;
  active: number | null;
  setActive: (
    value: number | null | ((prevVar: number | null) => number | null)
  ) => void;
}

function ListItem({ title, content, index, active, setActive }: FaqListProps) {
  const toggle = (index: number) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <div
      onClick={(e) => {
        toggle(index);
        e.stopPropagation();
      }}
      className={index === active ? "item-wrapper active" : "item-wrapper"}
    >
      <div>
        <div className="item-title">
          <div className="item-title-container">
            <span>{title}</span>
          </div>
        </div>
        <div className="item-content">
          <ListItemContent index={index} content={content} />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
