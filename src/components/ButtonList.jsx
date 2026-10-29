const actions = [
  { id: 1, name: "Зберегти", action: "save" },
  { id: 2, name: "Видалити", action: "delete" },
  { id: 3, name: "Редагувати", action: "edit" },
  { id: 4, name: "Поділитися", action: "share" }
];
function ButtonList() {
    const handleAction = (name, type) =>
    {
        alert(`Дія: ${name}, Тип: ${type}`)
    };
    return(
        <div>
            {actions.map(item =>(
                <button key={item.id} onClick={() => handleAction(item.name, item.action)}>
                    {item.name}
                </button>
            ))}
        </div>
    );
};
export default ButtonList;