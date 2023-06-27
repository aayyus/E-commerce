// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'Shop',
    path: PATH_PAGE.shop,
    icon: <Iconify icon="solar:shop-2-broken" />,
  },
  {
    title: 'About Us',
    path: PATH_PAGE.about,
    icon: <Iconify icon="mdi:about-circle-outline" />,
  },

  {
    title: 'Resources',
    path: '#',
    icon: <Iconify icon="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger" />,
    children: [
     
      {
        subheader: 'About',
        items: [
          { title: 'About Us', path: PATH_PAGE.about },
          { title: 'Contact Us', path: PATH_PAGE.contact },
          { title: 'FAQs', path: PATH_PAGE.faqs },
        ],
      },
      {
        subheader: 'Policies',
        items: [
          { title: 'Privacy Policy', path: PATH_PAGE.privacy },
          { title: 'Cookie Policy', path: PATH_PAGE.cookie },
          { title: 'Terms and Condition', path: PATH_PAGE.terms },
        ],
      },
      {
        subheader: 'Other',
        items: [
          { title: 'Blogs', path: PATH_PAGE.blog.root },
          { title: 'Offers', path: PATH_PAGE.comingSoon },
          { title: 'Announcements', path: PATH_PAGE.comingSoon },
        ],
      },
    ],
  },
];

export default navConfig;
