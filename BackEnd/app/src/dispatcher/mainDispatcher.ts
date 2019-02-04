import express = require("express");
import customerDispatcher from "./customerDispatcher";
import itemDispatcher from "./itemDispatcher";
import orderDispatcher from "./orderDispatcher";
import cors = require("cors");

const mainDispatcher = express.Router();

mainDispatcher.use(cors());
mainDispatcher.use(express.json());

mainDispatcher.use("/api/v1/customers",customerDispatcher);

mainDispatcher.use("/api/v1/items",itemDispatcher);

mainDispatcher.use("/api/v1/orders",orderDispatcher);

export default mainDispatcher;