import type { FC } from 'react'
import * as styles from './SearchBarStyle'

interface SearchBarProps {
  login: string
  setLogin: (event: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ login, setLogin }) => (
  <styles.SearchBar>
    <styles.SearchContainer>
      <styles.Search placeholder='Введите логин' value={login} onChange={(event) => setLogin(event.target.value)} />
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
