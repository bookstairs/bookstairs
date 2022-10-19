import React, { ComponentPropsWithoutRef } from 'react';

import {
  useMantineColorScheme,
  createStyles,
  LoadingOverlay as Loading,
  keyframes,
} from '@mantine/core';

// The bookstairs loading properties.
export interface LoadingOverlayProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  visible: boolean;
}

const breathAnime = keyframes({
  '0%': {
    transform: 'scale(0.9)',
  },
  '50%': {
    transform: 'scale(1.2)',
  },
  '100%': {
    transform: 'scale(0.9)',
  },
});

const useStyles = createStyles(() => ({
  logo: {
    animation: `0.819672s linear 0s infinite normal forwards running ${breathAnime}`,
  },
}));

// This component is based on https://mantine.dev/core/loading-overlay/.
// Show a bookstairs logo based loading animation.
export const LoadingOverlay = ({ width = 100, visible, ...others }: LoadingOverlayProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [leftColor, rightColor] =
    colorScheme === 'dark' ? ['#FFF', '#A0A3A6'] : ['#8B919A', '#3F4D5B'];
  const { classes } = useStyles();

  const loader = (
    <svg
      className={classes.logo}
      width={width}
      viewBox="0 0 354 329"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
      </g>
    </svg>
  );

  return <Loading loader={loader} visible={visible} />;
};
