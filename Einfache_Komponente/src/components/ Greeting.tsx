

type GreetingsProps = {
    name?: string;
}

export const Greeting = ({name = 'World'}: GreetingsProps) => {
    return (
        <div>
            <h1>Hallo, {name}</h1>
        </div>
    )
}
