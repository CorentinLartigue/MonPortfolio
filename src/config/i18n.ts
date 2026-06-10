import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import appFr from '../lang/fr/app.json';
import appEn from '../lang/en/app.json';
import projectFr from '../lang/fr/project.json';
import projectEn from '../lang/en/project.json';
import error404Fr from '../lang/fr/404.json';
import error404En from '../lang/en/404.json';
import error503Fr from '../lang/fr/503.json';
import error503En from '../lang/en/503.json';
import homeFr from '../lang/fr/home.json';
import homeEn from '../lang/en/home.json';
import contactFr from '../lang/fr/contact.json';
import contactEn from '../lang/en/contact.json';
import privacyFr from '../lang/fr/privacy.json';
import privacyEn from '../lang/en/privacy.json';
import termsFr from '../lang/fr/terms.json';
import termsEn from '../lang/en/terms.json';
import skillsFr from '../lang/fr/skills.json';
import skillsEn from '../lang/en/skills.json';
import experiencesFr from '../lang/fr/experiences.json';
import experiencesEn from '../lang/en/experiences.json';
import formationsFr from '../lang/fr/formations.json';
import formationsEn from '../lang/en/formations.json';

const resources = {
    fr: {
        translation: {
            app: appFr,
            project: projectFr,
            error404: error404Fr,
            error503: error503Fr,
            home: homeFr,
            contact: contactFr,
            privacy: privacyFr,
            terms: termsFr,
            skills: skillsFr,
            experiences: experiencesFr,
            formations: formationsFr
        }
    },
    en: {
        translation: {
            app: appEn,
            project: projectEn,
            error404: error404En,
            error503: error503En,
            home: homeEn,
            contact: contactEn,
            privacy: privacyEn,
            terms: termsEn,
            skills: skillsEn,
            experiences: experiencesEn,
            formations: formationsEn
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie']
        }
    });

export default i18n;