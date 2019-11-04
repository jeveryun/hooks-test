import React, { useState } from 'react'
import { Modal } from 'antd'

export const useModal = (initTitle: string, initContent: string | React.ReactElement) => {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState(initTitle)
  const [content, setContent] = useState(initContent)

  const CustomModal = () => {
    return (
      <Modal visible={visible} title={title} closable={false} footer={null}>
        {content}
      </Modal>
    )
  }

  const show = (content?: string | React.ReactElement) => {
    content && setContent(content)
    setVisible(true)
  }

  const hide = (delay?: number) => {
    if (delay) {
      setTimeout(() => setVisible(false), delay);
    } else {
      setVisible(false)
    }
  }

  return {
    show, hide, CustomModal, setTitle, setContent
  }
}
