const baseUrl = 'https://api.github.com/search/users?q='

export const getUsersByLogin = async (login: string) => {
  const response = await fetch(`${baseUrl}${login}&per_page=14`)

  if (!response.ok) {
    console.log('Произошла ошибка')
  }

  const usersObject = await response.json()
  const users = usersObject.items
  return users
}

export const getUserRepositories = async (url: string) => {
  const response = await fetch(`${url}?per_page=100`)

  console.log(response)

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
