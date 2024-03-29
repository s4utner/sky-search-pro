import { useGetPopularUsersQuery } from './hooks/useGetPopularUsersQuery'
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
        <styles.Menu>
          <styles.SearchContainer>
            <styles.Search placeholder='Введите логин' />
            <styles.SearchButton>Поиск</styles.SearchButton>
          </styles.SearchContainer>
          <styles.SortContainer>
            <styles.SortText>Репозитории по:</styles.SortText>
            <styles.SortSelect>
              <styles.SortSelectOption>Возрастанию</styles.SortSelectOption>
              <styles.SortSelectOption>Убыванию</styles.SortSelectOption>
            </styles.SortSelect>
          </styles.SortContainer>
        </styles.Menu>
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
