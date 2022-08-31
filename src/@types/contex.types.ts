export interface Props {
    children: React.ReactNode;
}

export interface ContextProps {
    player: boolean;
    setPlayer: (n: boolean) => void;
}

export const contextDefaultValue: ContextProps = {
    player: false,
    setPlayer: () => {},
};
