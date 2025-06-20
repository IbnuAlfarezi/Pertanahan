export interface DelegationUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    fullname: string;
}

export interface DelegateSignaturePayload {
    user_email: string;
}

export interface DelegateSignatureResponse {
    detail?: string;
}

export interface ApiResponseDetail {
    detail?: string;
    message?: string;
}

export interface CurrentDelegationsResponse {
    id: string; 
    file: string;
    owner: number; 
}