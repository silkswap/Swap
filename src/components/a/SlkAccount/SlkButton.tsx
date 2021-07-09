import React from 'react'
import { Modal, useModal, Button } from '@pancakeswap-libs/uikit'
import styled, { ThemeContext } from 'styled-components'
import SlkAccountModal from './SlkAccountModal'

const SlkAccountBtn = () => {

    const [onPresentSlkAccount] = useModal(<SlkAccountModal />)

    return (
            <Button
                scale="sm"
                variant="tertiary"
                onClick={onPresentSlkAccount}
                className='navbar-btn navbar-slk-btn'
                style={{marginRight: '16px'}}
            >
                SLK
            </Button>
        )
}

export default SlkAccountBtn
