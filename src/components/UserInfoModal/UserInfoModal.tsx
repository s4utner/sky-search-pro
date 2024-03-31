import { ErrorMessage, Loader } from '../../components'
import { useGetUserOrganizationsQuery, useGetUserRepositoriesQuery } from '../../hooks'
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
    data: organizationsNumber,
    isLoading: isOrganizationsNumberLoading,
    isError: isOrganizationsNumberError,
    isSuccess: isOrganizationsNumberSuccess,
  } = useGetUserOrganizationsQuery(organizationsUrl)

  const {
    data: repositoriesNumber,
    isLoading: isRepositoriesNumberLoading,
    isError: isRepositoriesNumberError,
    isSuccess: isRepositoriesNumberSuccess,
  } = useGetUserRepositoriesQuery(reposUrl)

  return (
    <styles.Background onClick={closeModal}>
      <styles.MainInfo onClick={(event) => event.stopPropagation()}>
        <styles.CloseIcon src={closeIcon} onClick={closeModal} />
        {isOrganizationsNumberLoading || isRepositoriesNumberLoading ? (
          <Loader variant={'secondary'} />
        ) : isOrganizationsNumberError || isRepositoriesNumberError ? (
          <ErrorMessage variant={'secondary'} />
        ) : (
          <>
            <styles.Avatar src={avatarUrl} />
            <styles.Info>
              <styles.Login href={`https://github.com/${login}`}>{login}</styles.Login>
              {isRepositoriesNumberSuccess && <styles.InfoText>Репозитории: {repositoriesNumber < 100 ? repositoriesNumber : '>100'}</styles.InfoText>}
              {isOrganizationsNumberSuccess && <styles.InfoText>Организации: {organizationsNumber}</styles.InfoText>}
            </styles.Info>
          </>
        )}
      </styles.MainInfo>
    </styles.Background>
  )
}
