import express = require("express");
import customerDispatcher from "./customerDispatcher";
import itemDispatcher from "./itemDispatcher";
import cors = require("cors");



const mainDispatcher = express.Router();


mainDispatcher.use(cors());
mainDispatcher.use(express.json());

mainDispatcher.use("/api/v1/customers",customerDispatcher);

mainDispatcher.use("/api/v1/items",itemDispatcher);


export default mainDispatcher;