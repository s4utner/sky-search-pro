import { styled } from 'styled-components'

export const SearchBar = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
`

export const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 20px;
`

export const Search = styled.input`
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 10px 20px 10px 20px;
  background-color: white;
  font-size: 24px;

  &::placeholder {
    color: gray;
    text-align: center;
  }
`

export const SearchButton = styled.button`
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 10px 20px 10px 20px;
  background-color: white;
  font-size: 24px;
  color: #fff;
  background-color: #ee5a0b;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: #d05d1f;
  }
`

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-right: 20px;
`

export const SortText = styled.p`
  font-size: 24px;
  color: #fff;
`

export const SortSelect = styled.select`
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 10px 20px 10px 20px;
  background-color: white;
  font-size: 24px;
  cursor: pointer;
`

export const SortSelectOption = styled.option`
  font-size: 8px;
`
