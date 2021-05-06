import {} from 'styled-components';
import { ThemeType } from 'context/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
