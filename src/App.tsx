import * as styles from './AppStyle'
import { GlobalStyle } from './GlobalStyle'

export const App = () => {
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
        <styles.UsersContainer></styles.UsersContainer>
      </styles.Wrapper>
    </>
  )
}
