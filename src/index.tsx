import 'shared/config/i18n/i18n';
import 'app/styles/main.scss';
import { createRoot } from "react-dom/client";
import App from 'app/App';
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </ThemeProvider>
);