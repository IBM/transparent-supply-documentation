/**
 *********************************************************************
 * © Copyright IBM Corp. 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *********************************************************************
*/

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  const newHeadComponents = [];
  for (const component of headComponents) {
    if (!Array.isArray(component) && component.key !== 'sans') { // Don't include variable font
      newHeadComponents.push(component);
    }
  }
  if (newHeadComponents.length !== headComponents.length) {
    replaceHeadComponents(newHeadComponents);
  }
};
