import { App, inject } from 'vue';
import {
  pl,
  en,
  Locales,
} from '@/locales';
import { ref } from 'vue';

const createTranslatorLibrary = () => {
  const locale = ref(process.env.VUE_APP_LOCALE || 'pl')
  const locales: Record<string, Locales> = {
    pl,
    en,
  };
  const tr = () => locales[locale.value]
  return {
    locale,
    locales,
    tr,
  }
}

type Translator = ReturnType<typeof createTranslatorLibrary>

export const translatorSymbol = Symbol('translator');

export const translator = (Vue: App) => {
  const i = createTranslatorLibrary();
  Vue.provide(translatorSymbol, i);
};

export function useTranslator() {
  const translatorInstance = inject<Translator>(translatorSymbol);
  if (!translatorInstance) throw new Error('No translator provided!');

  return translatorInstance;
}
