export const menuData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/project",
    iconClass: "fa-regular fa-plus",
    submenu: [
      {
        label: "All Projects",
        href: "/project",
        iconClass: "fa-regular fa-plus",
        submenu: [
          { label: "ROYAL CASTLE", href: "/project-details/ongoing/residential-plots-coimbatore-for-sale-kunnathur-kovilpalayam-royal-castle" },
          { label: "ROYAL VILLAGE", href: "/project-details/completed/residential-plots-coimbatore-for-sale-kariyampalayam-karegoundenpalayam-royal-village" },
          { label: "ROYAL PARADISE", href: "/project-details/ongoing/residential-plots-in-coimbatore-for-sale-kovilpalayam-vip-golden-city" },
          { label: "ROYAL ENCLAVE", href: "/project-details/ongoing/residential-plots-coimbatore-for-sale-kurumbapalayam-royal-enclave" },
          { label: "ROYAL AVENUE", href: "/project-details/ongoing/residential-plots-in-coimbatore-for-sale-konadayampalyam-kovilpalayam-royal-avenue" },
          { label: "VIP & GOLDEN CITY", href: "/project-details/ongoing/residential-plots-in-coimbatore-for-sale-kovilpalayam-vip-goldencity" },
        ]
      },
      {
        label: "On-going Projects",
        href: "/project-ongoing",
        iconClass: "fa-regular fa-plus",
        submenu: [
          { label: "ROYAL VILLAGE", href: "/project-details/ongoing/residential-plots-coimbatore-for-sale-kariyampalayam-karegoundenpalayam-royal-village" },
          { label: "ROYAL CASTLE", href: "/project-details/ongoing/residential-plots-coimbatore-for-sale-kunnathur-kovilpalayam-royal-castle" },
          { label: "ROYAL PARADISE", href: "/project-details/ongoing/residential-plots-in-coimbatore-for-sale-kovilpalayam-royal-paradise" },
          { label: "ROYAL AVENUE", href: "/project-details/ongoing/residential-plots-in-coimbatore-for-sale-konadayampalyam-kovilpalayam-royal-avenue" },
          { label: "ROYAL GATEWAY", href: "/project-details/ongoing/residential-plots-coimbatore-for-sale-vadavalli-royal-gateway" },
        ]
      },
      {
        label: "Completed Projects",
        href: "/project-completed",
        iconClass: "fa-regular fa-plus",
        submenu: [
          { label: "VIP & GOLDEN CITY", href: "/project-details/completed/residential-plots-in-coimbatore-for-sale-kovilpalayam-vip-goldencity" },
          { label: "ROYAL ENCLAVE", href: "/project-details/completed/residential-plots-coimbatore-for-sale-kurumbapalayam-royal-enclave" },
        ]
      },
    ]
  },
  {
    label: "Gallery",
    href: "/videos",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const onepageLinks = [
  { href: "#about", text: "About Us" },
  { href: "#services", text: "Services" },
  { href: "#projects", text: "Projects" },
  { href: "#team", text: "Team" },
  { href: "#blog", text: "Blog" },
  { href: "#contact", text: "Contact" },
];

export const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Video Gallery", href: "/videos" },
  { name: "Blog", href: "/blog" },
];
