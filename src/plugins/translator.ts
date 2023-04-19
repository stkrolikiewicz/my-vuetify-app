import { App, inject, reactive } from 'vue';
import {
  pl,
  en,
  Locales,
} from '@/locales';

export interface Translator {
  locale: string;
  locales: {
    [key in string]: Locales;
  };
  tr (): Locales;
}

const translatorLibrary: Translator = {
  locale: process.env.VUE_APP_LOCALE || 'pl',
  locales: {
    pl,
    en,
  },
  tr() {
    return this.locales[this.locale];
  },
};

export const translatorSymbol = Symbol('translator');

export const translator = (Vue: App) => {
  const i = reactive(translatorLibrary);
  Vue.provide(translatorSymbol, i);
};

export function useTranslator() {
  const translatorInstance = inject<Translator>(translatorSymbol);
  if (!translatorInstance) throw new Error('No translator provided!');

  return translatorInstance;
}
