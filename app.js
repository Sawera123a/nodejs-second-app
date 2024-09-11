
import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

  config({
    path:"./data/config.env"
  });

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: [process.env.FRONTEND_URL],
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials:true,//it ensures that cookies or other credentials are sent with the request
})
);

//using routes..., ///api/v1 (means k hm api use kr rae h,v1 means version 1)
app.use( "/api/v1/users" , userRouter);
app.use( "/api/v1/task" , taskRouter);

// //connect
// mongoose.connect("mongodb://127.0.0.1:27017", {
//     dbName: "backendapi",
// })
//    .then(() => console.log("Database Connected"))
//     .catch((e) => console.log(e));

// //schema    
// const  schema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// });

// //model
// const User = mongoose.model("User", schema);

//routing
app.get("/", (req,res)=>{
    res.send("Nice working");
});

//api
// app.get("/users/all", async(req,res)=>{

//     const users = await User.find({});

    
//     console.log(req.query);
//         res.json({
//         success: true,
//         users,
//     });
// });
//     //status(201) means created
//     res.status(201).cookie("tempi", "lol").json({
//         success: true,//is se pta chle ga k api successfullly hui h ya ni
//         message: "Registered Successfully",
//     });
// });

// app.listen(4000, ()=>{
//     console.log("Server is working");
// });

//using error middleware 
app.use(errorMiddleware);