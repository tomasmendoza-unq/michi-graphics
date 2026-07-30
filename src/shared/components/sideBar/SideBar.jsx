import "./SideBar.css";

export const SideBar = ({ title, side, children }) => {
    return (
        <aside className={`sidebar ${side}`}>
            <h2>{title}</h2>

            <div className="sidebar-content">{children}</div>
        </aside>
    );
};
