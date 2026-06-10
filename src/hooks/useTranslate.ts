import {useTranslation} from 'react-i18next';

export const useTranslate = () => {
    const {t, i18n} = useTranslation();
    return {
        t,
        i18n,
        currentLanguage: i18n.language,
        changeLanguage: (lng: string) => i18n.changeLanguage(lng),
    };
};