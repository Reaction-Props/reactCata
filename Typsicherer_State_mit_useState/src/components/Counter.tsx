interface CounterProps {
    counter: number
    increment: () => void
    decrement: () => void
}

export const Counter = ({counter, increment, decrement}: CounterProps) => {
    return (
        <>
            <button onClick={increment}>Minus</button>
            <h3>{counter}</h3>
            <button onClick={decrement}>Plus</button>
        </>
    )
}
