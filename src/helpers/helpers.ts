export const cutUserLogin = (login: string, numberOfLetters: number) => {
  const loginByLetters = login.split('')
  const loginNumberOfLetters = loginByLetters.length

  if (loginNumberOfLetters > numberOfLetters) {
    return `${loginByLetters.slice(0, numberOfLetters).join('')}...`
  }

  return login
}
