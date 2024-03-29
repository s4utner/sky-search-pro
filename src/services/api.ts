const baseUrl = 'https://api.github.com/search/users?q='

export const getPopularUsers = async () => {
  const response = await fetch(`${baseUrl}tom+repos:%3E42+followers:%3E1000`)

  if (!response.ok) {
    console.log('Произошла ошибка')
  }

  const popularUsersObject = await response.json()
  const popularUsers = popularUsersObject.items
  return popularUsers
}

export const getUsersByLogin = async (login: string) => {
  const response = await fetch(`${baseUrl}${login}`)

  if (!response.ok) {
    console.log('Произошла ошибка')
  }

  const usersObject = await response.json()
  const users = usersObject.items
  return users
}
