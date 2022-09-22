
const user = {
    name:"Иван",
    lastname: "Иванов",
    email: "ivan@ya.ru",
    id: "1",
    about: "Тут я рассказываю историю своей жизни и о своих увлечениях...",
    avatar: "/public/r5.jpg",
};

const users ={
    0:{name:"Нина", lastname:"Яблочкова"},
    1:{name:"Ипатий", lastname:"Вольпов"},
    2:{name:"Федор", lastname:"Тютчев"},
    3:{name:"Владислав", lastname:"Тетерин"},
    4:{name:"Константин", lastname:"Петров"},
}


export function getUser() {
    return user;
}
export function getUsers(){
    return users;
}
