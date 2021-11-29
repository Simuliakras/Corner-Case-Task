import React from "react";

interface ListItemProps {
  content: string[];
  index: number;
}

function ListItemContent({ content, index }: ListItemProps) {

  return (
    <div className="item-inner-content">
      <ul>
        {content.map((itemContent, index) => {
          return (
            <li key={"item-content-" + index}>
              <span dangerouslySetInnerHTML={{ __html: itemContent }}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListItemContent;