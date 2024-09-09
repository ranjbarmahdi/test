const express = require("express");

const app = express();

app.use((req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jabbar Amlak</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 350px; /* Adjust size as needed */
            font-weight: bold;
        }
    </style>
</head>
<body>
    <span style="color:red">J</span>A<span style="color:rgb(255, 99, 71)">BB</span>A<span style="color:red">R</span>
</body>
</html>
`);
});
app.listen(3000, () => {
    console.log("Server Started On Port 3000");
});
