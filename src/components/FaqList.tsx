import React, { useState } from "react";
import { FaqData } from "./FaqData";
import ListItem from "./ListItem";

function FaqList() {
  const [active, setActive] = useState<null | number>(null);

  return (
    <section>
      {FaqData.map((item, index: number) => (
        <div className="list-item-container" key={"list-item-" + index}>
          <ListItem
            title={item.title}
            content={item.content}
            index={index}
            active={active}
            setActive={setActive}
          />
        </div>
      ))}
    </section>
  );
}

export default FaqList;
