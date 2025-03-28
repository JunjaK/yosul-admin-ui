interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

const menuData: MenuItem[] = [
  {
    label: '회원 관리',
    icon: 'lucide:user',
    route: '/user',
  },
  {
    label: '게시글 관리',
    icon: 'lucide:notebook-pen',
    route: '/article',
  },
  {
    label: '댓글 관리',
    icon: 'lucide:message-square',
    route: '/comment',
  },
  {
    label: '문의사항 관리',
    icon: 'lucide:circle-help',
    route: '/question',
  },
  {
    label: '주류 관리',
    icon: 'lucide:glass-water',
    route: '/alcohol',
  },
];

export default menuData;
