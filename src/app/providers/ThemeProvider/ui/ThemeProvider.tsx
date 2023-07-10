import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../context/ThemeContext";
import { FC, ReactNode, useMemo, useState } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
interface IThemeProvider {
    children: ReactNode
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
    const [ theme, setTheme ] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [ theme ]);

    return (
        <ThemeContext.Provider value={ defaultProps }>
            {children}
        </ThemeContext.Provider>
    );
};