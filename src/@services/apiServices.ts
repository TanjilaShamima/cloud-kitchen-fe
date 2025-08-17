import { UserType } from "@/@types/user";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
import { getServerSession, Session } from "next-auth";
import { getSession } from "next-auth/react";

interface ExtendedSession extends Session {
    user: UserType
}

export const getUserSession = async (isOnServer?: boolean): Promise<ExtendedSession | null> => {
    if (isOnServer) {
        return (await getServerSession(authOptions)) as ExtendedSession | null;
    }
    return (await getSession()) as ExtendedSession | null;
};

export const postToAPI = async (
    endpoint: string,
    data: object,
    includeAuth = true,
    isOnServer = false
) => {
    try {
        const session = await getUserSession(isOnServer);
        const headers = {
            "Content-Type": "application/json",
            ...(session?.user.accessToken &&
                includeAuth && {
                authorization: `Bearer ${session?.user.accessToken}`,
            }),
        };

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            const errorObject = await response.json();
            return { error: true, data: errorObject };
        }

        return { error: false, data: await response.json() };
    } catch (e) {
        return { error: true, data: e };
    }
};

export const getFromAPI = async (
    endpoint: string,
    includeAuth = true,
    isOnServer = false,
    queryParam = "/"
) => {
    try {
        const session = await getUserSession(isOnServer);
        const headers = {
            "Content-Type": "application/json",
            ...(session?.user.accessToken &&
                includeAuth && {
                authorization: `Bearer ${session?.user.accessToken}`,
            }),
        };

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${encodeURIComponent(
                endpoint
            )}${queryParam}`,
            {
                method: "GET",
                headers: headers,
                cache: "no-store",
            }
        );

        if (!response.ok) {
            const errorObject = await response.json();
            return { error: true, data: errorObject };
        }

        return { error: false, data: await response.json() };
    } catch (e) {
        return { error: true, data: e };
    }
};


export const patchToAPI = async (
    endpoint: string,
    data: object,
    isOnServer?: boolean
) => {
    try {
        const session = await getUserSession(isOnServer);
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${session?.user?.accessToken}`,
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            const errorObject = await response.json();
            return { error: true, data: errorObject };
        }
        if (response.status === 204) {
            return { error: false, data: null };
        }

        return { error: false, data: await response.json() };
    } catch (e) {
        return { error: true, data: e };
    }
};

export const optionToAPI = async (endpoint: string) => {
    try {
        const session = await getUserSession();
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
            {
                method: "OPTIONS",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${session?.user.accessToken}`,
                },
            }
        );

        if (!response.ok) {
            const errorObject = await response.json();
            return { error: true, data: errorObject };
        }

        return { error: false, data: await response.json() };
    } catch (e) {
        return { error: true, data: e };
    }
};

export const deleteFromAPI = async (
    endpoint: string,
    includeAuth = true,
    isOnServer = false
) => {
    try {
        const session = await getUserSession(isOnServer);
        const headers = {
            "Content-Type": "application/json",
            ...(session?.user?.accessToken &&
                includeAuth && {
                authorization: `Bearer ${session?.user.accessToken}`,
            }),
        };
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/`,
            {
                method: "DELETE",
                headers: headers,
            }
        );

        if (!response.ok) {
            return false;
        }

        return true;
    } catch (e) {
        return { error: true, data: e };
    }
};

export const uploadFileToS3 = async (endpoint: string, file: File) => {
    try {
        const response = await fetch(endpoint, {
            method: "PUT",
            body: file,
            headers: {
                "Content-Type": file.type,
            },
        });

        if (!response.ok) {
            return { error: true };
        }

        return { error: false };
    } catch (e) {
        return { error: true };
    }
};

export const uploadFileToS3WithUploadProgress = async (
    endpoint: string,
    file: File,
    progressCallback: { (percentage: number): void }
) => {
    try {
        const response = await axios.put(endpoint, file, {
            headers: {
                "Content-Type": file.type,
            },
            onUploadProgress: (progressEvent: any) => {
                const { loaded, total } = progressEvent;
                if (total !== undefined) {
                    const percentage = Math.floor((loaded * 100) / total);
                    progressCallback(percentage);
                }
            },
        });

        if (response.status !== 200) {
            return { error: true };
        }

        return { error: false };
    } catch (e) {
        return { error: true };
    }
};

export const deleteIncludeQueryFromAPI = async (
    endpoint: string,
    includeAuth = true,
    isOnServer = false,
    queryParam = "/"
) => {
    try {
        const session = await getUserSession(isOnServer);
        const headers = {
            "Content-Type": "application/json",
            ...(session?.user?.accessToken &&
                includeAuth && {
                authorization: `Bearer ${session?.user?.accessToken || ''}`,
            }),
        };
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/${queryParam}`,
            {
                method: "DELETE",
                headers: headers,
            }
        );

        if (!response.ok) {
            return false;
        }

        return true;
    } catch (e) {
        return { error: true, data: e };
    }
};

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    headers: {
        accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const signUpUser = async (data: { email: string; password: string; name: string }) => {
    const response = await apiClient.post('/auth/signup', data);
    return response.data;
};