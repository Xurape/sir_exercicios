const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

router.use('/api', require('./routes/api'));