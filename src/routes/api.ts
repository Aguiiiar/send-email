import { Router } from 'express';
import * as EmailController from "../controllers/emailController";

const router = Router();

router.post("/contato", EmailController.contato);


export default router;