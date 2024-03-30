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

export const getUserFollowers = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    console.log('Произошла ошибка')
  }

  const followers = await response.json()
  const followersNumber: number = followers.length
  return followersNumber
}

export const getUserRepositories = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    console.log('Произошла ошибка')
  }

  const repositories = await response.json()
  const repositoriesNumber: number = repositories.length
  return repositoriesNumber
}

export const getUserOrganizations = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    console.log('Произошла ошибка')
  }

  const organizations = await response.json()
  const organizationsNumber = organizations.length
  return organizationsNumber
}
