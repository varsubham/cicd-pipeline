const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world changed by aravinda to check checkout uses: actions/checkout@v4f"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})
