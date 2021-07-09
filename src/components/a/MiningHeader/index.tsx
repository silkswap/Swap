import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, TuneIcon, HistoryIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import intl from 'react-intl-universal'
import DetailsModal from './DetailsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  // border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px 24px 0 24px;
`

const Details = styled.div`
  flex: 1;
`

const MiningHeader = ({ title, description, children }: PageHeaderProps) => {
  const TranslateString = useI18n()

  const [onPresentSettings] = useModal(<DetailsModal translateString={TranslateString}/>)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Heading mb="8px">{title}</Heading>
        </Details>
        <IconButton variant="text" onClick={onPresentSettings} title={TranslateString(1200, 'Details')}>
          {/* <TuneIcon width="24px" color="currentColor" /> */}
          <div style={{color: '#008D3E', fontSize: '12px',fontWeight: 'normal'}}>{intl.get('Swap.Details')}</div>
        </IconButton>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default MiningHeader
