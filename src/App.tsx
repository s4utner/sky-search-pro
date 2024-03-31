import { Loader, SearchBar, UsersList, ErrorMessage } from './components'
import { useGetPopularUsersQuery, useGetUsersByLoginQuery } from './hooks'
import { GlobalStyle } from './GlobalStyle'
import * as styles from './AppStyle'
import { useState } from 'react'

export const App = () => {
  const [login, setLogin] = useState('')

  const {
    data: popularUsers,
    isLoading: isPopularUsersLoading,
    isError: isPopularUsersError,
    isSuccess: isPopularUsersSuccess,
  } = useGetPopularUsersQuery()

  const {
    data: searchedUsers,
    isLoading: isSearchedUsersLoading,
    isError: isSearchedUsersError,
    isSuccess: isSearchedUsersSuccess,
  } = useGetUsersByLoginQuery(login)

  console.log(searchedUsers)

  return (
    <>
      <GlobalStyle />
      <styles.Wrapper>
        <styles.Title>Сервис для поиска пользователей GitHub</styles.Title>
        <SearchBar login={login} setLogin={(login) => setLogin(login as string)} />
        {isSearchedUsersLoading && <Loader />}
        {isSearchedUsersSuccess && <UsersList users={searchedUsers} isSuccess={isPopularUsersSuccess} />}
        {isSearchedUsersError && <ErrorMessage />}
      </styles.Wrapper>
    </>
  )
}
