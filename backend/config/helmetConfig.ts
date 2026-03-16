import { HelmetOptions } from "helmet";

export const getHelmetConfig = (): HelmetOptions => {
    const isDevelopment: boolean = process.env.NODE_ENV === "development";

    // Goes for both production and development
    const baseConfig: HelmetOptions = {
        contentSecurityPolicy: false,
        noSniff: true,
    };

    // Development
    if (isDevelopment) {
        return {
            ...baseConfig,
            hsts: false,
        } as HelmetOptions;
    }

    // Production
    return {
        ...baseConfig,
        hsts: {
            // one year in seconds
            maxAge: 3153600,
            includeSubDomains: true,
            preload: true,
        },
        frameguard: { action: "deny" },
        referrerPolicy: { policy: "no-referrer" },
    } as HelmetOptions;
};