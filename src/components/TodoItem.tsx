"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id:string,complete:boolean)=>void
};

export function TodoItem({ id, title, complete,toggleTodo }: TodoItemProps) {
  return (
    <li className=" flex items-center gap-1">
      <input id={id} type="checkbox" className="peer mt-2 cursor-pointer"
      defaultChecked={complete}
      onChange={e=>toggleTodo(id,e.target.checked)}
      />
      <label
        htmlFor={id}
        className="ml-1 mt-1 cursor-pointer text-2xl peer-checked:text-slate-500 peer-checked:line-through"
      >
        {title}
      </label>
    </li>
  );
}
