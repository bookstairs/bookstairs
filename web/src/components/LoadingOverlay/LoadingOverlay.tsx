import React, { ComponentPropsWithoutRef } from 'react';

import { LoadingOverlay as Loading } from '@mantine/core';

import { useStyles } from '@/components/LoadingOverlay/LoadingOverlay.styles';

// The bookstairs loading properties.
export interface LoadingOverlayProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  visible: boolean;
}

// This component is based on https://mantine.dev/core/loading-overlay/.
// Show a bookstairs logo based loading animation.
export const LoadingOverlay = ({ width = 100, visible, ...others }: LoadingOverlayProps) => {
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
            className={classes.left}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            className={classes.right}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
        <g transform="translate(60.000000, 94.000000)">
          <polygon
            className={classes.left}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            className={classes.right}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
        <g transform="translate(120.000000, -0.000000)">
          <polygon
            className={classes.left}
            points="174 77.2412544 0.155121819 0 -9.17349661e-13 63.8081088 174 141.012177"
          />
          <polygon
            className={classes.right}
            points="174 77.1172148 234 47.0121771 234 110.907139 174 141.012177"
          />
        </g>
      </g>
    </svg>
  );

  return <Loading loader={loader} visible={visible} />;
};
