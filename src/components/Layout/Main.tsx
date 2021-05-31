interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
    <main>
        {children}
    </main>
);

export default Main;