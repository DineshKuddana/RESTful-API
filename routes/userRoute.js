import express from "express"; 
import { create , deleteUser, fetch , update  } from "../controller/userController.js";
const router = express.Router();

router.post("/create", create);
router.get("/getAllusers",fetch);
router.put("/update/:id" , update);
router.delete("/delete/:id",deleteUser);


export default router;
