type GreeProps = {
    name?: string;
};

export default function Greet({ name }: GreeProps) {
    return <div>Hello {name}</div>;
}
