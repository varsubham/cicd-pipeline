const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world changed by aravinda to check checkout uses: actions/checkout@v4f"
    })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
