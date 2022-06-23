import I18n from 'i18n-js';
import { ptBR } from './pt-BR';
import { Keywords } from './pt-BR/types';

const setLanguageToI18n = () => {
  I18n.translations = {
    pt_BR: ptBR,
  };

  I18n.locale = 'pt_BR';
  I18n.defaultLocale = 'pt_BR';
};

setLanguageToI18n();

export const translate = (key: Keywords): string => I18n.t(key);