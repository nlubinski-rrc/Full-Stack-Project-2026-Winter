import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import { clerkMiddleware } from "@clerk/express";
import watchlistRoutes from "./api/v1/routes/watchlistRoutes";
import movieRoutes from "./api/v1/routes/movieRoutes";
import { getHelmetConfig } from "../config/helmetConfig";
import { getCorsConfig } from "../config/corsConfig";
import { accessLogger, errorLogger, consoleLogger } from "./api/v1/middleware/logger";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import reviewRoutes from "./api/v1/routes/reviewRoutes";
import actorRoutes from "./api/v1/routes/actorRoutes";
import userActorRoutes from "./api/v1/routes/userActorRoutes"

const app: Express = express();

interface HealthCheckResponse {
    status: string;
    text: string;
}

app.use(accessLogger);
app.use(errorLogger);
app.use(consoleLogger);

app.use(helmet());
app.use(helmet(getHelmetConfig()));
app.use(cors());
app.use(cors(getCorsConfig()));
app.use(clerkMiddleware());
app.use(morgan("combined"));
app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        text: "Server is healthy",
    };
    res.json(healthData);
});
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/watchlist", watchlistRoutes);
app.use("/api/v1/actors", actorRoutes, userActorRoutes);

export default app;
