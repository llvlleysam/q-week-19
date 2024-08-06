import { useForm } from "react-hook-form";
import { usePostUser } from "../../hooks/useGet";
import { useContext } from "react";
import { rootContext } from "../../lib/Context";
import httpServes from "../../Servies/ServiesUser";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import { BaseURL } from "../../Constant/Baseurl";


export default function Todo() {
    const {mutate}=usePostUser()
    const {editMode,setEditMode}=useContext(rootContext)

    console.log(editMode?.id)
     async function putDataUser(newUser){
        const response= await httpServes.patch(`${BaseURL}/users/${editMode.id}`,newUser)
        console.log(newUser)
    }
    const qc=useQueryClient()
    const editUser= useMutation({
        mutationFn: (data)=>putDataUser(data),
        onSuccess:()=>{
            setEditMode(null)
            reset()
            qc.invalidateQueries("users")}
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm({defaultValues: {
        firstName: "",
        lastName: ""
      }});
      function submitBtn(values){
        if(!editMode){
            console.log(values)
            mutate(values)
            reset()
        }else{
            editUser.mutate(values)
        }
      }
      if(editMode){
        setValue("firstName",editMode.firstName)
          setValue("lastName",editMode.lastName)}
  return (
    <div>
      <form action="" onSubmit={handleSubmit((text)=>submitBtn(text))} className="flex flex-col gap-4">
        <input {...register('firstName')} className="w-full py-4 border border-black rounded-xl pl-3" type="text" placeholder="First Name ..."/>
        <input {...register('lastName')} className="w-full py-4 border border-black rounded-xl pl-3" type="text" placeholder="Last Name ..."/>
        <input className="w-full py-4 bg-green-600 text-white rounded-xl" type="submit" value={editMode ?"edit": "Add"} />
      </form>
    </div>
  )
}
