import { User } from "~/core/models/user.model";
import { userService } from "~/core/services/user-service";

interface UserState {
    users: Array<User>
}

export const state = (): UserState => ({
    users: []
})

export const mutations = {
    setUser(state: UserState, users: Array<User>){
        state.users = users;
    },
}

export const actions = {
    consultarUsuarios(contex: any){
        return new Promise<void>((resolve, reject) => {
            contex.commit("setUser", [])

            userService.consultarUsuarios().then((result) => {
                resolve();
                contex.commit("setUser", result)
            }).catch((err) =>  {
                reject(err)
                console.log('Error :>> ', err);
            }).finally(() => {
                console.log("-------");
                console.log('CHAMA ENCERRADA');
                console.log("-------");
            })
        })
    }
}
