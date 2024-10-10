import { FirstList } from "./firstlist/FirstList";
import { InfoCard } from "./infoCard/InfoCards";
import { Fond } from "./fond/Fond";
import { Information } from "./information/Inormation";
import { Form } from "./form/Form";
import { Blogs } from "./blog/Blogs";


function Main (){
    return <>
        <FirstList />
        <InfoCard />
        <Fond />
        <Information />
        <Form/>
        <Blogs />
    </>
    }
    
    export {Main};