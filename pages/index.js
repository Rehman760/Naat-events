import Layout from "../components/Layout"
import {API_URL} from '@/config/index'
import EventItem from "@/components/EventItem"
import Link from "next/link"


function Home({events}){
      
    return(<Layout>
        <h1>Up coming Events</h1>
        {events.length===0 && <h1>No events to show</h1>}
        {events.map((evt)=>(<EventItem key={evt.id}evt={evt}/>))}
        {events.length>0 && <Link href='/events' className="btn-secondary">view all events</Link>}
    </Layout>)
}
export default Home

export async function getServerSideProps(){
    const res=await fetch(`${API_URL}/api/events`)
    const events=await res.json()

    return {
        props: {events:events.slice(0,3)}
    }   
}