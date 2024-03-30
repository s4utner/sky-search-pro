import { useState } from 'react'
import { Loader, SearchBar, UsersList, ErrorMessage } from './components'
import { useGetPopularUsersQuery } from './hooks'
import { GlobalStyle } from './GlobalStyle'
import * as styles from './AppStyle'

export const App = () => {
  const [isUserModalVisible, setIsUserModalVisible] = useState(false)

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
        {isPopularUsersLoading && <Loader />}
        {isPopularUsersSuccess && <UsersList users={popularUsers} isSuccess={isPopularUsersSuccess} />}
        {isPopularUsersError && <ErrorMessage />}
      </styles.Wrapper>
      {isUserModalVisible && <styles.ModalBackground />}
    </>
  )
}
