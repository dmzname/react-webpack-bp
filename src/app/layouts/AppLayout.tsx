import { Layout } from "shared/ui/Layout/Layout";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const AppLayout = () => {
    const { theme } = useTheme();

    return (

        <Layout
            className={ theme }
            navbarSlot={ <Navbar/> }
            sidebarSlot={ <Sidebar/> }
        />

    );
};