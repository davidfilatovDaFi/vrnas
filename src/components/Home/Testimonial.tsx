import Container from "../Container"
import man from '../../assets/home/testimonial/man.png'
import SectionTitle from "../SectionTitle"
import ClientFeedback from "./ClientFeedback"
import { ourClients } from "../../constants/home"
import { useState } from "react"

const Testimonial = () => {

  const [activeClient, setActiveClient] = useState<number | null>(0)

  return (
    <section>
      <Container className="flex justify-center items-center relative">
        <SectionTitle
          title="testimonial"
          text="What Our Clients Are Saying"
          className="absolute text-center top-[111px]"
        />
        <img className="w-[1247px] h-[1247px] max-w-none" src={man} alt="" />
        {ourClients.map((client, index) => (
          <ClientFeedback 
            key={index}
            image={client.image}
            className={client.className}
            isActive={activeClient === index}
            onClick={() => setActiveClient(active => active === index ? null : index)}
          />
        ))}
      </Container>
    </section>
  )
}

export default Testimonial