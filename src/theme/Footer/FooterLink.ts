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
    to: "https://support.moneylover.me/",
    label: translate({ message: "Blog" }),
  },
  {
    to: "https://status.moneylover.com/",
    label: translate({ message: "Status" }),
  },
  {
    label: translate({ id: "privacy.policy", message: "Privacy policy" }),
    to: "/policy",
  },
  {
    label: translate({ message: "Terms of Service" }),
    to: "/terms-of-service",
  },
];
