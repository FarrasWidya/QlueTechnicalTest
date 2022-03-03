const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const axios = require('axios');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  try {
    const { data: response } = await axios.get('http://localhost:3004/Data')

    let newArr = []
    response.forEach(el => {
      let tempArr = []
      tempArr.push(el.username)
      tempArr.push(el.hair_color)
      tempArr.push(el.height)
      newArr.push(tempArr)
    });
    res.status(200).json({
      h: [
        "username",
        "hair_color",
        "height"
      ], d: newArr
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})