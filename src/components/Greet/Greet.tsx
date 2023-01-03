import { GreetProps } from './Gree.types';

export default function Greet({ name }: GreetProps) {
    if (name) {
        return <div>Hello {name}</div>;
    }
    return <div>Hello </div>;
}
