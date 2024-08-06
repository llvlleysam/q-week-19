import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataUser, postDataUser } from "../api/apis";


export default function useGetUser() {
 return useQuery({
    queryKey:["users"],
    queryFn: getDataUser
 })
}
export function usePostUser(newUser){
    const qc = useQueryClient()
    return useMutation({
        mutationFn :(newUser)=> postDataUser(newUser),
        onSuccess :()=>qc.invalidateQueries("users")
    })
}
