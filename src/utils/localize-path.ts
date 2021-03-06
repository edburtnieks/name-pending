import { localizePath as l } from "astro-i18next";
import { LANGUAGES } from "@constants/languages";

export const localizePath = (path: string, locale?: string | null): string => {
    let localizedPath = l(path, locale);

    if (!LANGUAGES.includes(localizedPath.split("/")[1])) {
        localizedPath = `/en${localizedPath}`;
    }

    if (localizedPath.endsWith("/")) {
        localizedPath = localizedPath.slice(0, -1);
    }

    return localizedPath;
};
