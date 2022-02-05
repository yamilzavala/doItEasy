import React, { useState } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import sectionsFake from "./section.data";

const Directory = () => {
  const [sections, setSections] = useState(sectionsFake);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
