/**
 *********************************************************************
 * © Copyright IBM Corp. 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *********************************************************************
*/

import React from 'react';
import cx from 'classnames';

import { copyright, homepage } from './PageCopyright.module.scss';

const PageCopyright = ({ isHomepage = false, children }) => (
  <p className={cx(copyright, { [homepage]: isHomepage })}>{children}</p>
);

export default PageCopyright;
