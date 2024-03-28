import * as styles from './AppStyle'
import { GlobalStyle } from './GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <styles.Wrapper>
        <styles.SearchContainer>
          <styles.Search placeholder='Введите логин' />
          <styles.SortContainer>
            <styles.SortText>Репозитории по:</styles.SortText>
            <styles.SortSelect>
              <styles.SortSelectOption>Возрастанию</styles.SortSelectOption>
              <styles.SortSelectOption>Убыванию</styles.SortSelectOption>
            </styles.SortSelect>
          </styles.SortContainer>
        </styles.SearchContainer>
        <styles.UsersContainer></styles.UsersContainer>
      </styles.Wrapper>
    </>
  )
}
