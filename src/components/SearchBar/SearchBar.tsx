import { Button } from '../../components'
import * as styles from './SearchBarStyle'

export const SearchBar = () => (
  <styles.SearchBar>
    <styles.SearchContainer>
      <styles.Search placeholder='Введите логин' />
      <Button children={'Поиск'} />
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
