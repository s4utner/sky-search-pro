import { styled } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`

export const SearchContainer = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
`

export const Search = styled.input`
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 10px 20px 10px 20px;
  background-color: white;
  font-size: 24px;
  box-sizing: border-box;

  &::placeholder {
    color: gray;
    text-align: center;
  }
`

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
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
`

export const SortSelectOption = styled.option`
  font-size: 8px;
`

export const UsersContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
