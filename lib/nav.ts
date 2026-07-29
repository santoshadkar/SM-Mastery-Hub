export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/tools", label: "Tools Hub" },
  { href: "/assessment", label: "Self-Assessment" },
  { href: "/resources", label: "Resources" },
  { href: "/chat", label: "Chat" },
];
