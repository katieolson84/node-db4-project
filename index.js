const server = require('./api/server');

server.get("/url", (req, res) => {
    res.json(["Monica","Joey","Chandler","Ross","Rachel", "Pheobe"]);
   });
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})