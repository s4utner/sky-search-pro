import { SearchBar } from './components'
import { useGetPopularUsersQuery } from './hooks'
import { IUser } from './types/types'
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
        <styles.UsersContainer>
          {isPopularUsersSuccess &&
            popularUsers.map((user: IUser) => {
              return (
                <styles.UserContainer>
                  <styles.UserInfo>
                    <styles.UserAvatar src={user.avatar_url}></styles.UserAvatar>
                    <styles.UserLogin>{user.login}</styles.UserLogin>
                  </styles.UserInfo>
                  <styles.UserButton>Подробнее</styles.UserButton>
                </styles.UserContainer>
              )
            })}
        </styles.UsersContainer>
      </styles.Wrapper>
    </>
  )
}
