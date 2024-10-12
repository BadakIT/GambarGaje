import {
  FaceSmileIcon,
  BoltIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";

import benefitone from "../../public/img/benefitone.jpg";

const benefitOne = {
  title: "Benefit Using Gambar Gaje",
  desc: "Many benefits are obtained if you use the services of Gambar_Gaje, as mentioned below",
  image: benefitone,
  bullets: [
    {
      title: "friendly service",
      desc: "Gambar Gaje admin is a friendly admin.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "fast workmanship",
      desc: "Vector work in gambar gaje completed 1-3 days.",
      icon: <BoltIcon />,
    },
    {
      title: "customer satisfaction number 1",
      desc: "Can make revisions until the customer is satisfied.",
      icon: <HandThumbUpIcon />,
    },
  ],
};

// const benefitTwo = {
//   title: "Offer more benefits here",
//   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: "Mobile Responsive Template",
//       desc: "Nextly is designed as a mobile first responsive template.",
//       icon: <DevicePhoneMobileIcon />,
//     },
//     {
//       title: "Powered by Next.js & TailwindCSS",
//       desc: "This template is powered by latest technologies and tools.",
//       icon: <AdjustmentsHorizontalIcon />,
//     },
//     {
//       title: "Dark & Light Mode",
//       desc: "Nextly comes with a zero-config light & dark mode. ",
//       icon: <SunIcon />,
//     },
//   ],
// };

export { benefitOne};
