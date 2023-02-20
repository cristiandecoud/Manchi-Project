import { AxiosResponse } from 'axios';
export declare const getCode: (prompt: string, temperature?: string) => Promise<AxiosResponse>;
export declare const getText: (prompt: string, temperature?: string) => Promise<AxiosResponse<import("openai").CreateCompletionResponse, any>>;
