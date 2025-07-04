import aliasesData from '../data/aliases_raw.json';
const aliases = aliasesData.aliases;

export const findLanguage = (language: string): boolean => {
  const search = language.toLowerCase();
  return aliases.some(alias => alias === search);
};
