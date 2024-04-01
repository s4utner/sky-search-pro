import type { FC } from 'react'
import * as styles from './SearchBarStyle'

interface SearchBarProps {
  login: string
  setLogin: (login: string) => void
  setSortMethod: (sortMethod: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ login, setLogin, setSortMethod }) => (
  <styles.SearchBar>
    <styles.SearchContainer>
      <styles.Search placeholder='Введите логин' value={login} onChange={(login) => setLogin(login.target.value)} />
    </styles.SearchContainer>
    <styles.SortContainer>
      <styles.SortText>Репозитории по:</styles.SortText>
      <styles.SortSelect onChange={(sortMethod) => setSortMethod(sortMethod.target.value)}>
        <styles.SortSelectOption value={'desc'}>Убыванию</styles.SortSelectOption>
        <styles.SortSelectOption value={'asc'}>Возрастанию</styles.SortSelectOption>
      </styles.SortSelect>
    </styles.SortContainer>
  </styles.SearchBar>
)
