const express = require('express')
const app = express();



app.use(express.static('./'))
app.get('/', (req, res) => res.send('./review.html'))



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));