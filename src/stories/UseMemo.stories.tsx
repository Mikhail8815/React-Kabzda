import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS')
    return   <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Misha', 'Vanya', 'Lena', 'Marsik'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("m") > -1)
    }, [users])

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray} />
    </>
}




const BooksSecret = (props: {books: Array<string>, addBook: ()=>void}) => {
    console.log('USERS')
    return <div>
        <button onClick={() => props.addBook()}>+</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallBack = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
      return books.filter(u => u.toLowerCase().indexOf("m") > -1)
    }, [books])

     const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
         setBooks(newBooks)
     }
    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={books} addBook={addBook}/>
    </>
}