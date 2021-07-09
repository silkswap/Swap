import { MenuEntry } from '@pancakeswap-libs/uikit'
import intl from 'react-intl-universal'

const Trade = intl.get('Config.Trade')

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/repurchase',
  },
  {
    label: 'Trade',
    // label: Trade,
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    icon: 'PoolIcon',
    href: '/pool',
  },
  {
    label: 'Mining',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Prophet',
    icon: 'ProphetIcon',
    href: '/farms',
  },
  {
    label: 'Equity Pool',
    icon: 'IfoIcon',
    href: '/equitypool',
  },
  {
    label: 'Repurchase',
    icon: 'RepurchaseIcon',
    href: '/repurchase',
  },
  {
    label: 'Invitation',
    icon: 'InvitationIcon',
    href: '/invitation',
  },
  {
    label: 'Dao',
    icon: 'TicketIcon',
    href: '/dao',
  },
  {
    label: 'Nft',
    icon: 'NftIcon',
    href: '/nft',
  }
]

// const config: MenuEntry[] = [
//   {
//     label: 'Home',
//     icon: 'HomeIcon',
//     href: 'https://pancakeswap.finance/',
//   },
//   {
//     label: 'Trade',
//     icon: 'TradeIcon',
//     initialOpenState: true,
//     status: {
//       text: 'MIGRATE',
//       color: 'warning',
//     },
//     items: [
//       {
//         label: 'LP Migration',
//         href: '/migrate',
//       },
//       {
//         label: 'Exchange',
//         href: 'https://exchange.pancakeswap.finance/#/swap',
//       },
//       {
//         label: 'Liquidity',
//         href: 'https://exchange.pancakeswap.finance/#/pool',
//       },
//       {
//         label: 'V1 Liquidity (Old)',
//         href: '/pool',
//       },
//     ],
//   },
//   {
//     label: 'Farms',
//     icon: 'FarmIcon',
//     href: 'https://pancakeswap.finance/farms',
//   },
//   {
//     label: 'Pools',
//     icon: 'PoolIcon',
//     href: 'https://pancakeswap.finance/pools',
//   },
//   {
//     label: 'Prediction (BETA)',
//     icon: 'PredictionsIcon',
//     href: 'https://pancakeswap.finance/prediction',
//   },
//   {
//     label: 'Lottery',
//     icon: 'TicketIcon',
//     href: 'https://pancakeswap.finance/lottery',
//   },
//   {
//     label: 'Collectibles',
//     icon: 'NftIcon',
//     href: 'https://pancakeswap.finance/nft',
//   },
//   {
//     label: 'Team Battle',
//     icon: 'TeamBattleIcon',
//     href: 'https://pancakeswap.finance/competition',
//   },
//   {
//     label: 'Teams & Profile',
//     icon: 'GroupsIcon',
//     items: [
//       {
//         label: 'Leaderboard',
//         href: 'https://pancakeswap.finance/teams',
//       },
//       {
//         label: 'Task Center',
//         href: 'https://pancakeswap.finance/profile/tasks',
//       },
//       {
//         label: 'Your Profile',
//         href: 'https://pancakeswap.finance/profile',
//       },
//     ],
//   },
//   {
//     label: 'Info',
//     icon: 'InfoIcon',
//     items: [
//       {
//         label: 'Overview',
//         href: 'https://pancakeswap.info',
//       },
//       {
//         label: 'Tokens',
//         href: 'https://pancakeswap.info/tokens',
//       },
//       {
//         label: 'Pairs',
//         href: 'https://pancakeswap.info/pairs',
//       },
//       {
//         label: 'Accounts',
//         href: 'https://pancakeswap.info/accounts',
//       },
//     ],
//   },
//   {
//     label: 'IFO',
//     icon: 'IfoIcon',
//     href: 'https://pancakeswap.finance/ifo',
//   },
//   {
//     label: 'More',
//     icon: 'MoreIcon',
//     items: [
//       {
//         label: 'Contact',
//         href: 'https://docs.pancakeswap.finance/contact-us',
//       },
//       {
//         label: 'Voting',
//         href: 'https://voting.pancakeswap.finance',
//       },
//       {
//         label: 'Github',
//         href: 'https://github.com/pancakeswap',
//       },
//       {
//         label: 'Docs',
//         href: 'https://docs.pancakeswap.finance',
//       },
//       {
//         label: 'Blog',
//         href: 'https://pancakeswap.medium.com',
//       },
//       {
//         label: 'Merch',
//         href: 'https://pancakeswap.creator-spring.com/',
//       },
//     ],
//   },
// ]

export default config
