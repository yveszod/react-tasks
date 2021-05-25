import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color="#1f76bb" text="Add" onAdd={onAdd} showAdd={showAdd} />
        </header>
    )
}

export default Header
