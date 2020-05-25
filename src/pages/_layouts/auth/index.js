import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <svg
        viewBox="0 0 1152 392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M460.5 72C274.1 -21.2 76.1667 33.1667 0.5 72V418H1160V72C1078.8 2.79999 936.167 43.1667 875 72C814.5 110.833 646.9 165.2 460.5 72Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-14.5"
            y="0.539459"
            width="1189.5"
            height="427.461"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="-5" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="580.25"
            y1="20.5395"
            x2="580.25"
            y2="418"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06122F" />
            <stop offset="1" stopColor="#12021E" />
          </linearGradient>
        </defs>
      </svg>

      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
