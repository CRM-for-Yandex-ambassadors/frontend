export interface NavbarMenuListItem {
  label: string;
  link: string;
}

export const navbarMenuList: NavbarMenuListItem[] = [
  {
    label: 'Главная',
    link: '/',
  },
  {
    label: 'Отправка',
    link: '/sending',
  },
  {
    label: 'Бюджет',
    link: '/budget',
  },
  {
    label: 'Аналитика',
    link: '/analitics',
  },
];
