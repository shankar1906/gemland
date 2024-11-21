export const newsItems = [
  {
    id: 1,
    imgSrc: "/assets/img/news/02.jpg",
    title: "Supervisor Disapproved of Latest Work.",
    description: "Pellentesque vitae consectetur ante \nInteger non eros...",
    author: "By Admin",
    category: "Maintenance",
    delay: ".2s",
  },
  {
    id: 2,
    imgSrc: "/assets/img/news/03.jpg",
    title: "Supervisor Disapproved of Latest Work.",
    description: "Pellentesque vitae consectetur ante \nInteger non eros...",
    author: "By Admin",
    category: "Maintenance",
    delay: ".4s",
  },
];

export const newsImageItems = [
  {
    id: 3,
    backgroundImage: "/assets/img/news/01.jpg",
    title: "Helping Companies in Their <br />Green Transition",
    description:
      "Pellentesque vitae consectetur ante Integer non eros id quam dapibus tincidunt non sed dolor Praesent maximus ...",
    author: "By Admin",
    category: "Maintenance",
  },
];

export const newsItems2 = [
  {
    id: 4,
    imageSrc: "/assets/img/news/04.jpg",
    category: "Construction",
    date: "07 July 2024",
    title: "Latest Work Was Disapproved by the Supervisor.",
    authorImgSrc: "/assets/img/news/author-1.png",
    authorName: "Guy Hawkins",
    style: "",
  },
  {
    id: 5,
    imageSrc: "/assets/img/news/05.jpg",
    category: "Building",
    date: "07 July 2024",
    title: "Manager Disapproved of the Most Recent Work.",
    authorImgSrc: "/assets/img/news/author-2.png",
    authorName: "Guy Hawkins",
    style: "active",
  },
  {
    id: 6,
    imageSrc: "/assets/img/news/06.jpg",
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    authorImgSrc: "/assets/img/news/author-3.png",
    authorName: "Guy Hawkins",
    style: "",
  },
];

export const newsItems3 = [
  {
    id: 7,
    images: ["/assets/img/news/04.jpg", "/assets/img/news/04.jpg"],
    category: "Construction",
    date: "07 July 2024",
    title: "Latest Work Was Disapproved by the Supervisor.",
    author: {
      name: "Guy Hawkins",
      image: "/assets/img/news/author-1.png",
    },
    delay: ".2s",
  },
  {
    id: 8,
    images: ["/assets/img/news/05.jpg", "/assets/img/news/05.jpg"],
    category: "Building",
    date: "07 July 2024",
    title: "Manager Disapproved of the Most Recent Work.",
    author: {
      name: "Guy Hawkins",
      image: "/assets/img/news/author-2.png",
    },
    delay: ".4s",
    active: true,
  },
  {
    id: 9,
    images: ["/assets/img/news/06.jpg", "/assets/img/news/06.jpg"],
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: {
      name: "Guy Hawkins",
      image: "/assets/img/news/author-3.png",
    },
    delay: ".6s",
  },
  {
    id: 10,
    images: ["/assets/img/news/07.jpg", "/assets/img/news/07.jpg"],
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: {
      name: "Guy Hawkins",
      image: "/assets/img/news/author-3.png",
    },
    delay: ".2s",
  },
  {
    id: 11,
    images: ["/assets/img/news/08.jpg", "/assets/img/news/08.jpg"],
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: {
      name: "Guy Hawkins",
      image: "/assets/img/news/author-3.png",
    },
    delay: ".4s",
  },
  {
    id: 12,
    images: ["/assets/img/news/09.jpg", "/assets/img/news/09.jpg"],
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: {
      name: "Guy Hawkins",
      image: "/assets/img/news/author-3.png",
    },
    delay: ".6s",
  },
];

export const newsItems4 = [
  {
    id: 13,
    type: "standard",
    imageSrc: "/assets/img/news/post-1.jpg",
    title: "Attentive was born in 2015 help sales teams",
    date: "09 July 2024",
    category: "Building",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of xyz Lorem Ipsum, you need to be sure there isn't anything embarrassing",
  },
  {
    id: 14,
    type: "slider",
    swiperSlides: [
      "/assets/img/news/post-1.jpg",
      "/assets/img/news/post-2.jpg",
      "/assets/img/news/post-3.jpg",
    ],
    title: "Rules for Security on Construction Sites",
    date: "09 July 2024",
    category: "Building",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of xyz Lorem Ipsum, you need to be sure there isn't anything embarrassing",
  },
  {
    id: 15,
    type: "video",
    imageSrc: "/assets/img/news/post-3.jpg",
    title: "Norms for Security on Construction Sites",
    date: "09 July 2024",
    category: "Building",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of xyz Lorem Ipsum, you need to be sure there isn't anything embarrassing",
    video: true,
  },
];

export const recentItems = [
  {
    id: 16,
    imageSrc: "/assets/img/news/pp2.jpg",
    date: "09 July 2024",
    title: "The Beast Group <br /> Present And",
  },
  {
    id: 17,
    imageSrc: "/assets/img/news/pp3.jpg",
    date: "09 July 2024",
    title: "Construction Site <br /> Safety Guidelines",
  },
  {
    id: 18,
    imageSrc: "/assets/img/news/pp4.jpg",
    date: "09 July 2024",
    title: "An attractive <br /> construction website",
  },
];

export const allNews = [
  ...newsItems,
  ...newsImageItems,
  ...newsItems2,
  ...newsItems3,
  ...newsItems4,
  ...recentItems,
];
export const links = [
  { text: "Building", href: "#" },
  { text: "Construction", href: "#" },
  { text: "Marketing", href: "#" },
  { text: "Design", href: "#" },
];

export const listItems = [
  { text: "Building", link: "#", count: 5 },
  { text: "Construction", link: "#", count: 3 },
  { text: "Factory", link: "#", count: 4, isActive: true },
  { text: "Industry", link: "#", count: 2 },
  { text: "Real Estate", link: "#", count: 3 },
];
export const socialLinks = [
  { href: "#", iconClass: "fab fa-facebook-f", href: "https://m.facebook.com"},
  { href: "#", iconClass: "fab fa-twitter", href: "https://www.x.com" },
  { href: "#", iconClass: "fab fa-linkedin-in", href: "https://www.linkedin.com" },
  { href: "#", iconClass: "fab fa-youtube", href: "https://www.youtube.com" },
];
