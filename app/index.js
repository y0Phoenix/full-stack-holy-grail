var express = require("express");
const {createClient} = require('redis');

var app = express();

//TODO: create a redis client
const client = createClient({url: 'redis://127.0.0.1:6379'});

// serve static files from public directory
app.use(express.static("public"));

async function clientStart() {
  
  client.connect();
  
  client.on('error', (err) => console.log('Redis Error', err));
  client.on('connect', () => console.log('Redis Connected'));

  // TODO: initialize values for: header, left, right, article and footer using the redis client
  await client.set('header', 0);
  await client.set('left', 0);
  await client.set('article', 0);
  await client.set('right', 0);
  await client.set('footer', 0);
  // await client.sendCommand(["HMSET", "holygrail", "header", 0, "left", 0, "article", 0, "right", 0, "footer", 0]);  
}

clientStart();
  

// Get values for holy grail layout
async function data() {
  // TODO: uses Promise to get the values for header, left, right, article and footer from Redis
  return {
    header: await client.get('header'),
    left: await client.get('left'),
    article: await client.get('article'),
    right: await client.get('right'),
    footer: await client.get('footer')
  };
}

// plus
app.get("/update/:key/:value", async (req, res) => {
  const key = req.params.key;
  let value = Number(req.params.value);

  
  //TODO: use the redis client to update the value associated with the given key
});

// get key data
app.get("/data", async (req, res) => {
  // const value = await client.get('header');
  const Data = await data();
  console.log(Data);
  res.send(Data);
});

app.listen(3000, () => {
  console.log("Running on 3000");
});

process.on("exit", function () {
  client.quit();
});
