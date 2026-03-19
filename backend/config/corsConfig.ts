import {CorsOptions} from "cors";

export const getCorsConfig = (): CorsOptions => {
    const isDevelopment: boolean = process.env.NODE_ENV === "development";
    if (isDevelopment) {
        return {
            origin: true,
            credentials: true,
        } as CorsOptions;
    }

    return {
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        
    } as CorsOptions;
};
