import { useLocalStorage } from "usehooks-ts";
import { LOCALES } from "../../constants";
import "./LocaleSelectInput.scss";
import { FormEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LocaleSelectInput() {
  const [locale, setLocale] = useLocalStorage("locale", "en");
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  function handleLocaleChange(e: FormEvent<HTMLSelectElement>) {
    setLocale(e.currentTarget.value);
  }

  return (
    <select
      className="select-locale"
      name="locale"
      value={locale}
      onChange={handleLocaleChange}
    >
      {LOCALES.map((locale) => (
        <option key={locale.code} value={locale.code}>
          {locale.label}
        </option>
      ))}
    </select>
  );
}
