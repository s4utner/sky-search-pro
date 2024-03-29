import type { FC } from 'react'
import { Button } from '../../components'
import { IUser } from '../../types/types'
import * as styles from './UserCardStyle'

interface UserCardProps {
  user: IUser
}

export const UserCard: FC<UserCardProps> = ({ user }) => (
  <styles.UserCard>
    <styles.UserInfo>
      <styles.UserAvatar src={user.avatar_url}></styles.UserAvatar>
      <styles.UserLogin>{user.login}</styles.UserLogin>
    </styles.UserInfo>
    <Button children={'Подробнее'} fontSize={16} />
  </styles.UserCard>
)
