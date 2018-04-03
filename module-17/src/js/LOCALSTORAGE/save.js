// key =  'thisUser'

export default function save(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}
