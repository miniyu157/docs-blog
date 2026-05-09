export const SITE = {
  website: "https://blog.m31flower.com/", // replace this with your deployed domain
  author: "Yumeka",
  profile: "https://github.com/miniyu157/",
  desc: "梦花的个人博客与文档库，分享技术与日常。",
  title: "梦花的文档库",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑此页",
    url: "https://github.com/miniyu157/docs-blog/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
