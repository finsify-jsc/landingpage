import { translate } from "@docusaurus/Translate";

export const FooterLink = [
  {
    to: "https://finsify.com/",
    label: translate({ id: "about", message: "About us" }),
  },
  {
    to: "/career",
    label: translate({ id: "career", message: "Career" }),
  },
  {
    to: "https://note.moneylover.me/",
    label: translate({ message: "Blog" }),
  },
  {
    label: translate({ id: "privacy.policy", message: "Privacy policy" }),
    to: "/policy",
  },
];
