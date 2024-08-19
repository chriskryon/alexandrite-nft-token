// TranslatedHeader.jsx (Server Component)
import { useTranslations } from "next-intl";
import menuData from "./menuData";
import Header from ".";

const TranslatedHeader = () => {
  const t = useTranslations('Header');

  const translatedMenuData = menuData.map((menuItem) => ({
    ...menuItem,
    title: t(menuItem.title)
  }));

  // return <Header data={translatedMenuData} />;
  return {}
};

export default TranslatedHeader;
