/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    VITE_FIREBASE_API: string;
    VITE_FIREBASE_AUTH_DOMAIN: string;
    VITE_FIREBASE_PROJECTID: string;
    VITE_FIREBASE_STORAGEBUCKET: string;
    VITE_FIREBASE_MESSAGINGSENDERID: string;
    VITE_FIREBASE_APPID: string;
    VITE_FIREBASE_MEASUREMENTID: string;

    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
