import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source"
import autRoutes from 

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//app.get의 url로 접속을 하면 해당 블록의 코드를 실행합니다. 
app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", auth)

let port = 4000;

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);

    AppDataSource.initialize().then(async () => {
        console.log(`database initialized`)
    }).catch(error => console.log(error))
});