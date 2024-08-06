import { useContext, useState } from "react";
import Todo from "./components/common/Todo";
import TodoList from "./components/common/TodoList";
import useGetUser from "./hooks/useGet";
import { rootContext } from "./lib/Context";

function App() {
  const {editMode}=useContext(rootContext)
  console.log(editMode)
  const {data: users}=useGetUser()
  return (
    <div className="w-full flex flex-col items-center mt-4">
      <div className="w-[500px] flex flex-col gap-4">
        <Todo />
        {users?.map(user=><TodoList key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default App;
