import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { NAMESPACES, Namespace } from "../constants";

i18n
  .use(initReactI18next)
  .use(i18nBackend)
  .init({
    fallbackLng: "en",
    lng: "en",
    ns: NAMESPACES,
    defaultNS: Namespace.Common,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${window.location.origin}/locales/{{lng}}/{{ns}}.json`,
    },
  });
// i18n.use(initReactI18next).init({
//   fallbackLng: "en",
//   lng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
//   resources: {
//     en: {
//       translation: {
//         nav: {
//           home: "Home",
//           about: "About",
//         },
//       },
//     },
//     vi: {
//       translation: {
//         nav: {
//           home: "Trang chủ",
//           about: "Về chúng tôi",
//         },
//       },
//     },
//   },
// });
