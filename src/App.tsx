import { useGetPopularUsersQuery } from './hooks/useGetPopularUsersQuery'
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
            <styles.Button>Поиск</styles.Button>
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
            popularUsers.map((user: object) => {
              console.log(user)
            })}
        </styles.UsersContainer>
      </styles.Wrapper>
    </>
  )
}
