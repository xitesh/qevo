const app = require('./app');

require('dotenv').config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

