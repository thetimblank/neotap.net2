type ThemeValues = 'light' | 'dark';
type ThemeNames = ThemeValues | 'system';
interface Themes {
   name: ThemeNames;
   value: ThemeValues;
}
