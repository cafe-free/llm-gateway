import 'dotenv/config';

function getEnv(name: string, fallback?: string): string {
    const value = process.env[name] ?? fallback;

    if (value === undefined) {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
}

export const config = {
    nodeEnv: getEnv('NODE_ENV', 'development'),

    server: {
        host: getEnv('HOST', '127.0.0.1'),
        port: Number(getEnv('PORT', '3000')),
    },

    mistral: {
        apiKey: process.env.MISTRAL_API_KEY,
        model: getEnv('MISTRAL_MODEL', 'mistral-small-latest'),
    },

    ollama: {
        url: getEnv('OLLAMA_URL', 'http://127.0.0.1:11434'),
        model: getEnv('OLLAMA_MODEL', 'phi3:mini'),
    },
} as const;