
export interface LoginResponse {
    accessToken: string;
}


export const loginNow = async (emailInput: string, passwordInput: string) => {

    const baseUrl = import.meta.env.VITE_API_ENDPOINT;

    const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
        }),
    });

    const data: LoginResponse = await response.json();
    return { data, ok: response.ok };
};