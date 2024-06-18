import Container from "../Container"
import Button from "../UI/Button/Button"

const Start = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="max-w-[540px]">
            <h2 className="text-[64px] font-semibold">Immerse Yourself in Virtual Reality</h2>
            <p className="font-light text-[#D1D1D1] mt-3 mb-8">Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
            <Button type="filled">discover more</Button>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  )
}

export default Start