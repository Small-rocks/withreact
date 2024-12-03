

export default function Button({ children, onSmash }) {
    return (
        <button className="button" onClick={onSmash}>
            {children}
        </button>
    )
}