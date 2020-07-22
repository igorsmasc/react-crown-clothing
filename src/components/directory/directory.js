import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item";
import { selectSections } from "../../redux/directory/directory.selectors";

import "./directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections && sections.length
      ? sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))
      : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
