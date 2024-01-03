import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../context/ThemeContext";
import { FC, ReactNode, useMemo, useState, useEffect } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
interface IThemeProvider {
    initialTheme?: Theme
    children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children, initialTheme }) => {
    const [ theme, setTheme ] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.classList.add(theme);
        return () => {
            document.body.removeAttribute('class');
        };
    }, [ theme ]);

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