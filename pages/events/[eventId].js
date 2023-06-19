import Layout from "../../components/Layout"
import { useRouter } from "next/router"
import { API_URL } from "@/config/index"

function ProductId({evt}) {
    
  return (
    <Layout>Details about Event {evt.name}</Layout>
  )
}

export default ProductId

export async function getServerSideProps({query:{eventId}}) {

  const res = await fetch(`${API_URL}/api/events/${eventId}`)
  const event = await res.json()
  console.log(event)
  return {
    props: {
      evt:event[0],
    },
  }
}  