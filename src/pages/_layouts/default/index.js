import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import Drawer from '~/components/Drawer';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Drawer />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
