import { setDefaultLanguage, setUnderlineFormat } from './badiLocale';
import { BadiDateSettings } from './types';

const badiDateSettings = (settings: BadiDateSettings) => {
    if (settings.defaultLanguage) {
        setDefaultLanguage(settings.defaultLanguage);
    }
    if (settings.underlineFormat) {
        setUnderlineFormat(settings.underlineFormat);
    }
};

export { badiDateSettings };
