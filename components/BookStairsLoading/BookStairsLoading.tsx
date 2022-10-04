import React, { ComponentPropsWithoutRef } from 'react';

import { useMantineTheme } from '@mantine/core';
import { ColorScheme } from '@mantine/styles/lib/theme/types/ColorScheme';

// The bookstairs loading properties.
export interface BookStairsLoadingProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  scheme?: ColorScheme;
}

// Show a bookstairs logo based loading animation.
export const BookStairsLoading = ({ width = 100, scheme, ...others }: BookStairsLoadingProps) => {
  const theme = useMantineTheme();
  const [leftColor, rightColor] =
    (scheme || theme.colorScheme) === 'dark' ? ['#FFF', '#A0A3A6'] : ['#8B919A', '#3F4D5B'];
  return (
    <svg
      width={width}
      viewBox="0 0 354 329"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          from="0 0"
          to="-60 94"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
        />
        <g transform="translate(0.000000, 188.000000)">
          <polygon
            fill={leftColor}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            fill={rightColor}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
        <g transform="translate(60.000000, 94.000000)">
          <polygon
            fill={leftColor}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            fill={rightColor}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
        <g transform="translate(120.000000, -0.000000)">
          <polygon
            fill={leftColor}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            fill={rightColor}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
        <g transform="translate(180.000000, -94.000000)">
          <polygon
            fill={leftColor}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            fill={rightColor}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
      </g>
    </svg>
  );
};
