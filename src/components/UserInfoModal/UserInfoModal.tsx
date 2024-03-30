import type { FC } from 'react'
import closeIcon from '../../assets/img/close_icon.png'
import * as styles from './UserInfoModalStyle'

interface UserInfoModalProps {
  avatarUrl: string
  login: string
  followers?: string
  reposUrl?: string
  organizationsUrl?: string
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
  console.log(followers, reposUrl, organizationsUrl)

  return (
    <styles.MainInfo>
      <styles.CloseIcon src={closeIcon} onClick={closeModal} />
      <styles.Avatar src={avatarUrl} />
      <styles.Info>
        <styles.Login href={`https://github.com/${login}`}>{login}</styles.Login>
        {followers && <styles.InfoText>Подписчики:</styles.InfoText>}
        {reposUrl && <styles.InfoText>Репозитории:</styles.InfoText>}
        {organizationsUrl && <styles.InfoText>Организации:</styles.InfoText>}
      </styles.Info>
    </styles.MainInfo>
  )
}
