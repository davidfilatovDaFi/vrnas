import { achivmentBlocks } from "../../constants/home"
import Container from "../Container"

const Achivments = () => {
  return (
    <section className="px-3 xl:px-0 mb-[100px] md:mb-[120px]">
      <Container className="p-[1px] bg-[linear-gradient(90deg,_rgba(255,_255,_255,_.3)_0,_transparent_100%)]">
        <div className="flex flex-col md:flex-row items-start gap-[50px] px-[64px] pt-[42px] pb-[52px] bg-[#252532]">
          {achivmentBlocks.map(block => (
            <article key={block.title}>
              <img className="w-[70px] h-[70px]" src={block.image} alt="" />
              <h2 className="text-[20px] mt-[42px] mb-[12px]">{block.title}</h2>
              <p className="text-[14px] leading-[28px] text-[#B0B0B2]">{block.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Achivments