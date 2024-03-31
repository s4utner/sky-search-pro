import { useState } from 'react'
import { Button, UserInfoModal } from '../../components'
import type { FC } from 'react'
import { IUser } from '../../types/types'
import * as styles from './UserCardStyle'

interface UserCardProps {
  user: IUser
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const [isUserModalVisible, setIsUserModalVisible] = useState(false)

  return (
    <styles.Container>
      <styles.UserCard>
        <styles.UserInfo>
          <styles.UserAvatar src={user.avatar_url}></styles.UserAvatar>
          <styles.UserLogin>{user.login}</styles.UserLogin>
        </styles.UserInfo>
        <Button children={'Подробнее'} variant={'secondary'} onClick={() => setIsUserModalVisible(true)} />
      </styles.UserCard>
      {isUserModalVisible && (
        <UserInfoModal
          avatarUrl={user.avatar_url}
          login={user.login}
          reposUrl={user.repos_url}
          organizationsUrl={user.organizations_url}
          closeModal={() => setIsUserModalVisible(false)}
        />
      )}
    </styles.Container>
  )
}
