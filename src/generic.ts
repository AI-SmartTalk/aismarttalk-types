export interface ErrorResponse {
    message: string;
    status?: number;
}

export interface ChatResponse {
    response: string;
}

export interface ImportDocumentsResponse {
    status: 'ok' | 'error';
}