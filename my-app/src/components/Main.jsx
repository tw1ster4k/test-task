import React from 'react'
import { useState } from 'react'
import { cn } from "@bem-react/classname";
import Modal from '../components_task_1/Modal/Modal'
import Cards from '../components_task_1/Cards/Cards';
import Button from "../components_task_1/Button2/Button2";

const Main = () => {

    // Когда используешь библиотеку, пиши cn...(имя блока с большой буквы)
    const cnMain = cn("Main")
    const [modalActive, setModalActive] = useState(false)
    const [data,setData] = useState({})

    const getData = () => {
        setModalActive(true)
        fetch('https://randomuser.me/api/?results=10').then(async (res) => {
            const result = await res.json()
            setData(result.results)
        })
    }

    return (
        <div className={cnMain()}>
            <h1>/qubit</h1>
            {/*Используем кнопку "как есть"*/}
            <Button callBack={() => getData()} text={'Открыть'} mods={{base: {size: "m", bkgColor: "red"}, hover: {bkgColor: "yellow"}}}/>
            <Modal active={modalActive}>
                {/*Передаем набор модификаторов*/}
                <Button callBack={() => setModalActive(false)} text={'Закрыть'} mods={{base: {size: "s", bkgColor: "blue"}, hover: {bkgColor: "green"}}}/>
                <Cards data={data} />
            </Modal>
        </div>
    )
}

export default Main