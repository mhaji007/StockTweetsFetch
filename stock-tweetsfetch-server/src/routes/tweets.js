const { Router } = require("express");
const fetch = require("node-fetch");

const router = Router();
// make a fetch request to stocktwits endpoint to retrieve tweets
router.post("/", async (req, res) => {
  const { symbol } = req.body;
  const data = await fetch(
    `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json`
  )
    .then((res) => res.json())
    .catch((err) => console.log("Error: ", err));
  if (data.response.status == 200) {
    return res.send(data);
  } else if (data.response.status == 404) {
    return res.send(data);
  }
  return res.status(503).json({ message: "Internal Server Error" });
});

module.exports = router;
