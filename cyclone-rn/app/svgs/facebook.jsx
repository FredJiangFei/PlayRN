import { SvgXml } from 'react-native-svg'

const xml = `
<svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="35.4549" cy="35" r="35" fill="#1977F3"/>
<path d="M47.4219 45.2661L49.0269 35.2061H38.9789V28.6789C38.9789 25.9291 40.3801 23.2428 44.8844 23.2428H49.4549V14.6801C49.4549 14.6801 45.3073 14 41.3431 14C33.0683 14 27.6571 18.8147 27.6571 27.5388V35.2061H18.4549V45.2661H27.6571V69.5792C29.5016 69.8581 31.3919 70 33.318 70C35.244 70 37.1344 69.8532 38.9789 69.5792V45.2661H47.4219Z" fill="white"/>
</svg>
`

export default function Facebook() {
  return <SvgXml xml={xml} />
}
