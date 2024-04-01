import { Octokit } from 'octokit'

const octokit = new Octokit({})
const baseUrl = 'https://api.github.com/search/users?q='

export const getUsersByLogin = async (login: string, pageNumber: number, sortMethod: string) => {
  const response = await fetch(
    `${baseUrl}${login}&sort=repositories&order=${sortMethod}&per_page=14&page=${pageNumber}`,
    {
      headers: {
        accept: 'application/vnd.github+json',
      },
    }
  )

  const usersObject = await response.json()
  const users = usersObject.items
  return users
}

export const getUserRepositories = async (url: string) => {
  const repositories = await octokit.paginate(`${url}?per_page=100`, {
    headers: {
      accept: 'application/vnd.github+json',
    },
  })

  const repositoriesNumber = repositories.length
  return repositoriesNumber
}

export const getUserOrganizations = async (url: string) => {
  const organizations = await octokit.paginate(`${url}?per_page=100`, {
    headers: {
      accept: 'application/vnd.github+json',
    },
  })

  const organizationsNumber = organizations.length
  return organizationsNumber
}
