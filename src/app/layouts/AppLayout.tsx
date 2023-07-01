import {Layout} from "shared/ui/Layout/Layout";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

export const AppLayout = () => {
    const { theme } = useTheme();

    return (
        <Layout className={theme}>
            <Navbar />
        </Layout>
    )
}