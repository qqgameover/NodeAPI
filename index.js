const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');

const app = express();

app.get('/', (request, response) => {
	readFile('products.json', 'utf-8', (err, text) => {
		if (err) {
			response.status(500).send("Oh noooo");
		}
		response.send(text);
	})
});

app.listen(process.env.PORT || 3000, () => console.log("Open on port 3000"))