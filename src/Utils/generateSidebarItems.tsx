export type TSidebarItem = {
    key: string;
    label: string;
    path: string
    icon?: React.ReactNode;
    children?: TSidebarItem[];
}