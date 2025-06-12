import {Wrap, WrapItem, Card, Text} from "@chakra-ui/react";
import SidebarWithHeader from "./components/shared/SideBar.jsx";
import {useEffect, useState} from "react";
import {getCustomers} from "./services/client.js";
import {Spinner} from "@chakra-ui/react"
import CardWithImage from "./components/card.jsx";

const App = () => {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getCustomers().then(res => {
            setCustomers(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <SidebarWithHeader>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color="blue.500"
                    animationduration="0.8s"
                    size='xl'
                />
            </SidebarWithHeader>
        )
    }
    if (customers.length <= 0) {
        return (
            <SidebarWithHeader>
                <Text>No customers available</Text>
            </SidebarWithHeader>
        )
    }
    return (
        <SidebarWithHeader>
            <Wrap spacing={"30px"} justify={"center"}>
                {customers.map((customer, index) => (
                    <WrapItem key={index}>
                        <CardWithImage
                            // id={customer.id}
                            // name={customer.name}
                            // email={customer.email}
                            // age={customer.age}
                            {...customer}
                            imageNumber={index}
                        />

                    </WrapItem>
                ))}
            </Wrap>
        </SidebarWithHeader>
    )
}

export default App;

