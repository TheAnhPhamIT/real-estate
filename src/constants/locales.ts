type Locale = {
  label: string;
  code: string;
};

export enum Namespace {
  Common = "common",
  Validation = "validation",
  Glossary = "glossary",
  Home = "home",
  Placeholder = "placeholder",
}

export const LOCALES: Locale[] = [
  {
    label: "English",
    code: "en",
  },
  {
    label: "Vietnam",
    code: "vi",
  },
];

export const NAMESPACES: Namespace[] = [
  Namespace.Common,
  Namespace.Glossary,
  Namespace.Validation,
  Namespace.Home,
  Namespace.Placeholder,
];
