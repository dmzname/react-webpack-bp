import 'shared/config/i18n/i18n';
import 'app/styles/main.scss';
import { createRoot } from "react-dom/client";
import App from 'app/App';
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from "app/providers/StoreProvider";

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    );
}