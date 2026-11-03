function resolveApiBaseUrl(): string {
    const rawUrl = import.meta.env.VITE_API_URL;

    // Use explicit VITE_API_URL whenever provided
    if (typeof rawUrl === 'string' && rawUrl.trim() !== '') {
        return rawUrl.trim().replace(/\/+$/, '');
    }

    // Keep localhost development working when running dev server
    if (import.meta.env.DEV) {
        return 'http://localhost:8000';
    }

    // In production, do not silently fall back to localhost
    console.error(
        '[LibraEase Config Error] VITE_API_URL environment variable is missing in production. ' +
        'Please add VITE_API_URL in your Vercel Project Settings > Environment Variables.'
    );

    return '';
}

export const API_BASE_URL: string = resolveApiBaseUrl();
