import { Loader, SearchBar, UsersList, ErrorMessage, Button } from './components'
import { useGetUsersByLoginQuery } from './hooks'
import { GlobalStyle } from './GlobalStyle'
import * as styles from './AppStyle'
import { useEffect, useState } from 'react'

export const App = () => {
  const [login, setLogin] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [sortMethod, setSortMethod] = useState('desc')

  useEffect(() => {
    if (login === '') {
      setPageNumber(1)
    }
  }, [login])

  const {
    data: searchedUsers,
    isLoading: isSearchedUsersLoading,
    isError: isSearchedUsersError,
    isSuccess: isSearchedUsersSuccess,
  } = useGetUsersByLoginQuery(login, pageNumber, sortMethod)

  return (
    <>
      <GlobalStyle />
      <styles.Wrapper>
        <styles.Title>Сервис для поиска пользователей GitHub</styles.Title>
        <SearchBar
          login={login}
          setLogin={(login: string) => setLogin(login)}
          setSortMethod={(sortMethod: string) => setSortMethod(sortMethod)}
        />
        {isSearchedUsersLoading && <Loader />}
        <UsersList
          users={searchedUsers}
          isLoading={isSearchedUsersLoading}
          isSuccess={isSearchedUsersSuccess}
          isError={isSearchedUsersError}
        />
        {isSearchedUsersSuccess && searchedUsers.length > 0 && (
          <styles.ButtonContainer>
            <Button children={'Показать еще'} onClick={() => setPageNumber(pageNumber + 1)} />
          </styles.ButtonContainer>
        )}
        {isSearchedUsersError && <ErrorMessage />}
      </styles.Wrapper>
    </>
  )
}
