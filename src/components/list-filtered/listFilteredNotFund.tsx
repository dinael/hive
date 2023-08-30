import { FC } from 'react'

import Icon from '@/components/icon/Icon'

export type ListFilteredNotFoundProps = {
  message: string
  className?: string
}

export const ListFilteredNotFound: FC<ListFilteredNotFoundProps> = ({
  message,
  className
}: ListFilteredNotFoundProps) => {

  return (
    <p className={className}>
      <Icon
        color="currentColor"
        name="warning-cicle"
        size="xl"
        title="warning"
      />
      {message}
    </p>
  )
}

export default ListFilteredNotFound

