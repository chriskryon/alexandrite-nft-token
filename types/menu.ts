export type Menu = {
  id: number;
  title: any;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
