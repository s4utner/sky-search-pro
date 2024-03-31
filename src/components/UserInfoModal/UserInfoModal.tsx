import { Loader } from '../../components'
import { useGetUserFollowersQuery, useGetUserOrganizationsQuery, useGetUserRepositoriesQuery } from '../../hooks'
import type { FC } from 'react'
import closeIcon from '../../assets/img/close_icon.png'
import * as styles from './UserInfoModalStyle'

interface UserInfoModalProps {
  avatarUrl: string
  login: string
  followers: string
  reposUrl: string
  organizationsUrl: string
  closeModal: () => void
}

export const UserInfoModal: FC<UserInfoModalProps> = ({
  avatarUrl,
  login,
  followers,
  reposUrl,
  organizationsUrl,
  closeModal,
}) => {
  const {
    data: followersNumber,
    isLoading: isFollowersNumberLoading,
    isError: isFollowersNumberError,
    isSuccess: isFollowersNumberSuccess,
  } = useGetUserFollowersQuery(followers)

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
        {isFollowersNumberLoading || isOrganizationsNumberLoading || isRepositoriesNumberLoading ? (
          <Loader variant={'secondary'} />
        ) : (
          <>
            <styles.CloseIcon src={closeIcon} onClick={closeModal} />
            <styles.Avatar src={avatarUrl} />
            <styles.Info>
              <styles.Login href={`https://github.com/${login}`}>{login}</styles.Login>
              {isFollowersNumberSuccess && <styles.InfoText>Подписчики: {followersNumber}</styles.InfoText>}
              {isRepositoriesNumberSuccess && <styles.InfoText>Репозитории: {repositoriesNumber}</styles.InfoText>}
              {isOrganizationsNumberSuccess && <styles.InfoText>Организации: {organizationsNumber}</styles.InfoText>}
            </styles.Info>
          </>
        )}
      </styles.MainInfo>
    </styles.Background>
  )
}
