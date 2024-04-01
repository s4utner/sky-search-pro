import { ErrorMessage, Loader } from '../../components'
import { useGetUserOrganizationsQuery, useGetUserRepositoriesQuery } from '../../hooks'
import { cutUserLogin } from '../../helpers/helpers'
import type { FC } from 'react'
import closeIcon from '../../assets/img/close_icon.png'
import * as styles from './UserInfoModalStyle'

interface UserInfoModalProps {
  avatarUrl: string
  login: string
  reposUrl: string
  organizationsUrl: string
  closeModal: () => void
}

export const UserInfoModal: FC<UserInfoModalProps> = ({ avatarUrl, login, reposUrl, organizationsUrl, closeModal }) => {
  const {
    data: repositoriesNumber,
    isFetching: isRepositoriesNumberFetching,
    isLoading: isRepositoriesNumberLoading,
    isError: isRepositoriesNumberError,
  } = useGetUserRepositoriesQuery(reposUrl)

  const {
    data: organizationsNumber,
    isLoading: isOrganizationsNumberLoading,
    isError: isOrganizationsNumberError,
    isFetching: isOrganizationsNumberFetching,
  } = useGetUserOrganizationsQuery(organizationsUrl)

  return (
    <styles.Background onClick={closeModal}>
      <styles.MainInfo onClick={(event) => event.stopPropagation()}>
        <styles.CloseIcon src={closeIcon} onClick={closeModal} />
        {isRepositoriesNumberFetching ||
        isRepositoriesNumberLoading ||
        isOrganizationsNumberFetching ||
        isOrganizationsNumberLoading ? (
          <Loader variant={'secondary'} />
        ) : isOrganizationsNumberError || isRepositoriesNumberError ? (
          <ErrorMessage variant={'secondary'} />
        ) : (
          <>
            <styles.Avatar src={avatarUrl} />
            <styles.Info>
              <styles.Login href={`https://github.com/${login}`}>{cutUserLogin(login, 12)}</styles.Login>
              <styles.InfoText>Репозитории: {repositoriesNumber}</styles.InfoText>
              <styles.InfoText>Организации: {organizationsNumber}</styles.InfoText>
            </styles.Info>
          </>
        )}
      </styles.MainInfo>
    </styles.Background>
  )
}
