interface UserData {
    readonly username: string
    create_at?: Date
    superuser?: boolean
    readonly personal: {
        name:string
        email:string
    },
    logout(): void
    rename: (username: string) => void
}

function login(): UserData{
    return {
        username: "admin",
        create_at: new Date(),
        // superuser: true,
        personal: {
            name: "Adminencio",
            email: "foo@example.com",
        },
        logout(){
            console.log("Adios")
        },
        rename(username) {
            console.log("TODO: Rename account")
        }
    }
}

let l = login()
console.log(l.username)
l.rename("foo")

l.personal.name = "hola"

if(l.create_at){
    l.create_at.toISOString()
}