import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import getRoutes from "./routes/getRoutes";
import postRoutes from "./routes/postRoutes";
import putRoutes from "./routes/putRoutes";
import deleteRoutes from "./routes/deleteRoutes";

const app: Application = express();

app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Conectar las rutas
app.use("/api/getAll", getRoutes);
app.use("/api/post", postRoutes);
app.use("/api/put", putRoutes);
app.use("/api/delete", deleteRoutes);

// Manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", trace: "Entro por al app" });
});

export default app;
