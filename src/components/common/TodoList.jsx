
import { useContext } from "react";
import useGetUser from "../../hooks/useGet";
import { rootContext } from "../../lib/Context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import httpServes from "../../Servies/ServiesUser";
import { BaseURL } from "../../Constant/Baseurl";

export default function TodoList({user}) {
  const qc=useQueryClient()
  const {setEditMode}=useContext(rootContext)
  const delte=useMutation({
    mutationFn:deleteUser,
    onSuccess:qc.invalidateQueries("users")
  })

  async function deleteUser(id){
    const res = await httpServes.delete(`${BaseURL}/users/${id}`)
  }
  return (
    <div className="flex justify-around items-center border border-black p-4 rounded-2xl">
      <div className="flex gap-2">
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
      </div>
      <div className=" flex gap-4">
        <button onClick={()=>delte.mutate(user.id)} className="py-2 px-4 rounded-lg bg-red-500 text-white">Delete</button>
        <button onClick={()=>setEditMode(user)} className="py-2 px-4 rounded-lg bg-orange-500 text-white">Edit</button>
      </div>
    </div>
  );
}
