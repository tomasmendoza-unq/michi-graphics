export const SideBar = ({ title, options, side }) => {
    return (
        <aside className={`sidebar ${side}`}>
            <h2>{title}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </aside>
    );
};
