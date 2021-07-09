import React from 'react'
import { Modal,Text } from '@pancakeswap-libs/uikit'
import intl from 'react-intl-universal'

type DetailsModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const DetailsModal = ({ onDismiss = defaultOnDismiss, translateString }: DetailsModalProps) => {
  return (
    <Modal style={{width:'500px'}} title={translateString(1200, intl.get('Swap.Details') )} onDismiss={onDismiss}>
      <Text bold>{translateString(999, intl.get('Swap.Details_info'))}</Text>
    </Modal>
  )
}

export default DetailsModal
