import React from 'react'
import intl from 'react-intl-universal'
import styled from 'styled-components'
import setup from 'assets/img/setup.png'
import useI18n from 'hooks/useI18n'
import {  useModal} from '@pancakeswap-libs/uikit'
import LanguageSwitch from './languageSwitch'

const SwitchBtn =  styled.div`
  width:100%;
  padding:1.5rem 0;
`

const SwitchButton = () => {
  const TranslateString = useI18n();
  
  const [onLanguageSwitch] = useModal(<LanguageSwitch translateString={TranslateString}/>)
  return (
   <SwitchBtn onClick={onLanguageSwitch} style={{paddingLeft:'1.2rem'}}>
     <img src={setup} alt="" style={{width:'1.5rem'}} />
   </SwitchBtn>
  )
}

export default SwitchButton