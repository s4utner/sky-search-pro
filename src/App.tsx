import { SearchBar, UsersList } from './components'
import { useGetPopularUsersQuery } from './hooks'
import { GlobalStyle } from './GlobalStyle'
import * as styles from './AppStyle'

export const App = () => {
  const {
    data: popularUsers,
    isLoading: isPopularUsersLoading,
    isError: isPopularUsersError,
    isSuccess: isPopularUsersSuccess,
  } = useGetPopularUsersQuery()

  return (
    <>
      <GlobalStyle />
      <styles.Wrapper>
        <styles.Title>Сервис для поиска пользователей GitHub</styles.Title>
        <SearchBar />
        <UsersList users={popularUsers} isSuccess={isPopularUsersSuccess} />
      </styles.Wrapper>
    </>
  )
}
