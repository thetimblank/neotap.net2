type ThemeValues = 'light' | 'dark';

type ThemeNames = ThemeValues | 'system';

interface Themes {
   name: ThemeNames;
   value: ThemeValues;
}

interface Task {
   name: string;
   priority: number;
   dueAt?: Date;
}

interface Course {
   name: string;
   todo: Task[];
}