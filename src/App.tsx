import { Loader, SearchBar, UsersList, ErrorMessage } from './components'
import { useGetUsersByLoginQuery } from './hooks'
import { GlobalStyle } from './GlobalStyle'
import * as styles from './AppStyle'
import { useState } from 'react'

export const App = () => {
  const [login, setLogin] = useState('')

  const {
    data: searchedUsers,
    isLoading: isSearchedUsersLoading,
    isError: isSearchedUsersError,
    isSuccess: isSearchedUsersSuccess,
  } = useGetUsersByLoginQuery(login)

  return (
    <>
      <GlobalStyle />
      <styles.Wrapper>
        <styles.Title>Сервис для поиска пользователей GitHub</styles.Title>
        <SearchBar login={login} setLogin={(login) => setLogin(login as string)} />
        {isSearchedUsersLoading && <Loader />}
        <UsersList
          users={searchedUsers}
          isLoading={isSearchedUsersLoading}
          isSuccess={isSearchedUsersSuccess}
          isError={isSearchedUsersError}
        />
        {isSearchedUsersError && <ErrorMessage />}
      </styles.Wrapper>
    </>
  )
}
