import express,{Express, Request, Response} from 'express';
import cors from 'cors';
import {config} from './config';
import {registerRoutes} from './routes';

const port = config.server.port;

const app: Express = express();
app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5000',
    'http://localhost:3000',
    'https://libra-ease-project-3hr5-one.vercel.app',
    'https://libra-ease-project-3hr5-1wve4052s-aakash-401c.vercel.app',
    ...(process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',').map((s) => s.trim()) : [])
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (
                !origin ||
                allowedOrigins.includes(origin) ||
                origin.endsWith('.vercel.app')
            ) {
                callback(null, true);
            } else {
                callback(new Error(`Origin ${origin} not allowed by CORS`));
            }
        },
        credentials: true
    })
);

registerRoutes(app);

if (!process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

export default app;
