export const menu = [
  { title: "Home", href: "/", sub: "Front page" },
  { title: "About", href: "/about", sub: "Who we are", children: [
    ["Overview", "/about"],
    ["Salient Features", "/about/salient-features"],
    ["Management", "/about/management"],
    ["Messages", "/about/messages"],
  ] },
  { title: "Campuses", href: "/campuses", sub: "Our branches" },
  { title: "Academics", href: "/academics", sub: "Our courses", children: [
    ["Academics", "/academics"],
    ["Syllabus", "/academics/syllabus"],
    ["Examination", "/academics/examination"],
    ["Teacher Training", "/academics/teacher-training"],
    ["Hifz-e-Quran", "/academics/hifz-e-quran"],
  ] },
  { title: "Admission", href: "/admission", sub: "Apply now", children: [
    ["Admission Procedure", "/admission"],
    ["Class Level", "/admission/class-level"],
    ["Uniform", "/admission/uniform"],
  ] },
  { title: "Resources", href: "/resources", sub: "Gallery" },
  { title: "News", href: "/news", sub: "Latest news" },
  { title: "Contact", href: "/contact", sub: "Call or mail" },
];
