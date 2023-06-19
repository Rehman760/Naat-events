import Layout from "@/components/Layout"
import {API_URL} from '@/config/index'
import EventItem from "@/components/EventItem"

function EventsPage({events}){
      
    return(<Layout>
        <h1>Events</h1>
        {events.length===0 && <h1>No events to show</h1>}
        {events.map((evt)=>(<EventItem key={evt.id}evt={evt}/>))}
    </Layout>)
}
export default EventsPage

export async function getServerSideProps(){
    const res=await fetch(`${API_URL}/api/events`)
    const events=await res.json()

    return {
        props: {events}
    }   
}