export function digitalValidator(value: string) {
  return /^(\d|\.|,){1}$/.test(value);
}

export function looseDigitalValidator(value: string) {
  if (value === "") return true;

  return /^(\d|\.|,)+$/.test(value);
}
