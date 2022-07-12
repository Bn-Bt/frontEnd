import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
function View() {
    async function getViewData() {
        const data = await axios.get("https://sahay-backend.herokuapp.com/view_req")
        if (data.status == 200) {
            const datajson = await data.json();
            setUser(data.json().user)
            setEquipment(data.json().equipment)
        }
    }

    const [user, setUser] = useState("");
    const [equipment, setEquipment] = useState("");



    // useEffect(() => {
    //     getViewData();
    // })
    setUser({
        _id: "62cc7625e4109a9aa89646f2",
        email: "ly@gmail.com",
        name: "SMS",
        reg_no: "123rd",
        address: "Jaipur",
        contact: "1234567890"
    })
    return (
        <>
            <Card name={user.name} email={user.email} reg_no={user.reg_no} address={user.address} contact={user.contact}></Card>
        </>
    )

}
export default View;