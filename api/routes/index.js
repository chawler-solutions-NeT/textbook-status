import { Router } from "express";
import bookRouter from "./book.route.js";

const router = Router();

router.use("/api/books", bookRouter);

export default router;
