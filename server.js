import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 3000;

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:'This is a joke'
        },{
            id:2,
            title:'a joke2',
            content:'This is a joke2'
        },
        {
            id:3,
            title:'a joke3',
            content:'This is a joke3'
        },
        {
            id:4,
            title:'a joke 4',
            content:'This is a joke 4'
        },
        {
            id:5,
            title:'a joke 5',
            content:'This is a joke 5'
        }
    ];
    res.send(jokes);
})

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

//get a list of jokes

