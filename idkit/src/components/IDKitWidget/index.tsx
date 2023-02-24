import { memo } from 'react'
import type { FC } from 'react'
import BaseWidget from './BaseWidget'
import type { WidgetProps } from '@/types/config'

type Props = Omit<WidgetProps, 'internal_isSIWI'>

const IDKitWidget: FC<Props> = props => <BaseWidget {...props} />

export default memo(IDKitWidget)
