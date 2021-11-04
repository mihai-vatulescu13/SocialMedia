const express = require('express')
const authRouters = require('./routes/auth')

const app = express();
const port = process.env.PORT || 5000

app.use('/api/auth', authRouters)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.listen(port, () => console.log(`Sv is running on port: ${port}`))