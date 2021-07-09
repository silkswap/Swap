import React,{useState} from 'react'
import { Modal,Text } from '@pancakeswap-libs/uikit'
import intl from 'react-intl-universal'
import whitepaper from 'assets/img/whitepaper.png'
import twitter from 'assets/img/twitter.png'
import telegram from 'assets/img/telegram.png'
import github from 'assets/img/github.png'
import emile from 'assets/img/emile.png'
import styled from 'styled-components'

const config = [
  {
    title:'Whitepaper',
    img:whitepaper,
    url:'http://www.silkswap.org/bk_24630580.html'
  },
  {
    title:'Twitter',
    img:twitter,
    url:'https://twitter.com/god_me01'
  },
  {
    title:'Telegram',
    img:telegram,
    url:'https://0.plus/silkswap123'
  },
  {
    title:'Github',
    img:github,
    url:'https://github.com/silkswap/Swap'
  },
  // {
  //   title:'Emile',
  //   img:emile,
  //   url:'https://www.baidu.com/'
  // },
]

const lang = [
  {
    title:'En',
    ln:'en'
  },
  // {
  //   title:'中',
  //   ln:'zh'
  // },
  // {
  //   title:'한국어',
  //   ln:'ko'
  // },
  // {
  //   title:'日本語',
  //   ln:'ja'
  // },
]

type LanguageModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const LanguageSwitchModal = ({ onDismiss = defaultOnDismiss, translateString }: LanguageModalProps) => {
  const localStorageLang = localStorage.getItem('lang')
  const [la,setLa] = useState(localStorageLang || lang[0].ln)

  const setLang = (ln) => {
    localStorage.setItem('lang',ln)
    setLa(ln)
    window.location.reload()
  }

  const SpanLN = styled.span`
  display:inline-block;
  padding:1rem;
  border:1px solid #E6E6E6;
  margin-right:2.5rem;
  border-radius: 5px;
  `

  return (
    <Modal title='Settings' onDismiss={onDismiss} style={{width:'40rem',padding:'0'}}>
      {config.map(item=>{
        return (
          <a rel="noreferrer" href={item.url} style={{display:'flex',margin:'0.5rem 0'}} target='_blank'>
            <img src={item.img} alt="" style={{width:'1.5rem'}}/>
            <Text style={{marginLeft:'1rem'}}>{item.title}</Text>
          </a>
        )
      })}
      <div style={{display:'flex',alignItems:'center',marginTop:'8px'}}>
        <img src={emile} alt="" style={{width:'1.5rem'}}/>
        <span style={{marginLeft:'1rem'}}>Emile: slk@silkswap.org</span>
      </div>
      
      <div>
        <Text bold style={{margin:'2rem 0'}}>Language</Text>
      {lang.map(item=>{
        return (
          <SpanLN style={la===item.ln?{color:'#FFDB64',backgroundColor:'#008D3E',opacity:0.7}:{}} onClick={()=>setLang(item.ln)} >{item.title}</SpanLN>
        )
      })}
      </div>
    </Modal>
  )
}

export default LanguageSwitchModal