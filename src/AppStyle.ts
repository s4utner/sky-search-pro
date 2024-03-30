import { styled } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`

export const Title = styled.h1`
  margin-top: 36px;
  color: #ee5a0b;
  font-size: 48px;
  text-align: center;
`

export const ModalBackground = styled.div`
  position: absolute;
  opacity: 0.7;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #201f22;
`
