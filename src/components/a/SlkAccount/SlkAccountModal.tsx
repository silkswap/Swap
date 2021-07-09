import React from 'react'
import { Modal, Button, useModal } from '@pancakeswap-libs/uikit'
import styled, { css } from 'styled-components'
import intl from 'react-intl-universal'
import logoUrl from '../../../assets/img/logo2x.png'
// import { CardBody, ArrowDownIcon, Button, IconButton, Text, useModal, Link, Flex } from '@pancakeswap-libs/uikit'


interface IStyledComp {
  mt?: string,
  mb?: string,
  ml?: string
}

type SlkAccountModalProps = {
  onDismiss?: () => void
  // translateString: (translationId: number, fallback: string) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const Wrap = styled.div`
  width: 436px;
  @media (max-width: 500px) {
    padding: 16px !important;
    width: 100%;
  }
`
const Card = styled.div`
  background-color: #ffffff;
  padding: 18px 20px;
  border-radius: 10px;
  width: 100%;
  // max-width: 436px;
`
const Line = styled.div`
  height: 1px;
  transform: scale(1, .9);
  background-color: #E6E6E6;
  margin: 10px 0 14px 0;
`
const Row = styled.div`
  display: flex;
  align-items: center;
`
const RowBetween = styled.div<IStyledComp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'}
`
const Label = styled.div`
  font-size: 14px;
  color: #333333;
`
const Val = styled.div`
  font-size: 14px;
  color: #008d3e;
`
const NumText = styled.div`
  font-size: 22px;
  color: #008d3e;
`
const Btn = styled(Button)<IStyledComp>`
  width: ${props => props.width || '100%'};
  margin-left: ${props => props.ml || '0'};
  height: ${props => props.height || '34px'};
  font-weight: normal;
  font-size: 16px;
  border-radius: 4px;
  color: #FFDB64;
`
const ImgWrap = styled.div`
  // display: flex;
  // justify-content: center;
`
const LogoImg = styled.img`
  width: 56px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SlkAccountContent = () => {

  // const [onPresentSlkAccount] = useModal(<SlkAccountModal />)

  return (
    <Wrap style={{zIndex: 100}}>
      <ImgWrap>
          <LogoImg src={logoUrl} alt=""/>
      </ImgWrap>
      <Card>
        <RowBetween mb="16px" mt="30px">
          <Label>{intl.get('SLK.Your_SLK')}</Label>
          <Label>{intl.get('SLK.Can_be_harvest')} </Label>
        </RowBetween>
        <RowBetween>
          <NumText>100.000000</NumText>
          <Row>
            <NumText>0.000000</NumText>
            <Btn width="75px" ml="12px">{intl.get('SLK.Harvest')}</Btn>
          </Row>
        </RowBetween>

        <Line />
        <RowBetween mb="22px">
          <Label>{intl.get('SLK.SLK_price')}</Label>
          <Val>$ 1.12</Val>
        </RowBetween>
        <RowBetween mb="22px">
          <Label>{intl.get('SLK.SLK_in_circulation')}</Label>
          <Val>29999.000000</Val>
        </RowBetween>
        <RowBetween mb="28px">
          <Label>{intl.get('SLK.Total_Supply')}</Label>
          <Val>36,000,000.000000</Val>
        </RowBetween>
        <Btn height="42px">{intl.get('SLK.Confirm')}</Btn>
      </Card>
    </Wrap>
  )
}

// const HarvestModal = ({ onDismiss = defaultOnDismiss }: SlkAccountModalProps) => {
//   return (
//     <div></div>
//   )
// }

export default SlkAccountContent
