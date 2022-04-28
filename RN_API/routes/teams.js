const express = require('express')
const router = express.Router()

router.get('/teams', (req, res) => {
  res.send([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Lakers',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      rank: '4, 2',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Nets',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      rank: '4, 3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Rocket',
      imageUrl: 'https://picsum.photos/200/300?grayscale',
      rank: '4, 1',
    },
  ])
})

module.exports = router
