import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  
  let newClass="";

  if (props.tab === props.selectedTab) {
    newClass = "tab active-tab"
  } else {
    newClass = "tab"
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={newClass}
      onClick= {() => {
        props.selectTabHandler(props.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string
}
// Make sure you include PropTypes on your props.

export default Tab;
