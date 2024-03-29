import * as styles from './SearchBarStyle'

export const SearchBar = () => (
  <styles.SearchBar>
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
  </styles.SearchBar>
)
