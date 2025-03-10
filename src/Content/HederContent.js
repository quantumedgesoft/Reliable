const hederContent = {
  img_logo: "/Assets/Images/relible_logo.png",
  nav_links: [
    { name: "Home", href: "/" },
    { name: "Funder", href: "/funder" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "CDPAP", href: "/cdpap" },
        { name: "LHCSA", href: "/lhcsa" },
        { name: "OTHERS", href: "/others" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
  ],
  nav_button: "CONTACT US",
};
export default hederContent;
