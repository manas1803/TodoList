export interface ITask{
    taskId:string,
    taskName:string,
    isComplete:boolean,
    isEditable:boolean,
}

export interface ITodo{
    taskId:string,
    taskName:string,
    isComplete:boolean,
    isEditable:boolean,
    setTodolist:React.Dispatch<React.SetStateAction<ITask[]>>
}