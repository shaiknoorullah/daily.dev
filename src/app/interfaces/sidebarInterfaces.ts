export interface SidebarItem {
  label: string;
  icon?: React.ComponentType<any>;
  imageSrc?: string;
  customIcon?: boolean;
  bgColor?: string;
  intial?: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}
