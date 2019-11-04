import React from 'react'
import { useModal } from '../components/Modal'

export default () => {
  const { hide, show, CustomModal } = useModal('系统提示', '正在初始化')
  return (
    <div>
      <button onClick={() => show()}>Modal</button>
      <CustomModal></CustomModal>
    </div>
  )
}
