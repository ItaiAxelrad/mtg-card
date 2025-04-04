import type { MantineThemeOverride } from '@mantine/core';
import Link from 'next/link';

export const theme: MantineThemeOverride = {
  components: {
    Anchor: {
      defaultProps: {
        component: Link,
      },
    },
  },
};
