import { cn } from "../../utils/helpers";
import bg from "../../assets/home/testimonial/client-bg.png";
import activeBg from "../../assets/home/testimonial/client-active.png";
import { ElementRef, useRef } from "react";
import dialogSrc from "../../assets/home/testimonial/dialog.png";

interface IClientFeedbackProps {
  isActive: boolean;
  className?: string;
  image: string;
  onClick: () => void;
}

const ClientFeedback = ({
  isActive,
  className,
  image,
  onClick,
}: IClientFeedbackProps) => {
  const refBlock = useRef<ElementRef<"div">>(null);
  const refClient = useRef<ElementRef<"article">>(null);

  return (
    <article
      ref={refClient}
      onClick={() => {
        console.log(refClient.current?.offsetLeft! > window.innerWidth / 2);
        onClick();
      }}
      className={cn(
        "absolute w-[75px] h-[75px] flex items-center justify-center cursor-pointer transition-all",
        className,
        {
          "left-0 lg:left-0 z-10":
            isActive &&
            (window.innerWidth < 667 ||
              (refClient.current?.offsetLeft! > window.innerWidth / 2 &&
                window.innerWidth < 1620)),
        }
      )}
      style={{
        background: `url(${isActive ? activeBg : bg}) no-repeat 100%`,
      }}
    >
      <img className="w-[50px] h-[50px]" src={image} alt="" />
      <div
        style={{
          height: isActive ? refBlock.current?.clientHeight : 0,
          background: `url(${dialogSrc}) no-repeat 0 0 / 100% 100%`,
        }}
        className={cn(
          "absolute left-full ml-5 w-[297px] overflow-hidden transition-all duration-500"
        )}
      >
        <div ref={refBlock} className="w-full pt-[18px] px-[19px] pb-[13px]">
          <p>
            The team was professional, responsive, and a pleasure to work with.
            We highly recommend VRNas for any VR needs.
          </p>
          <h2>Robert Fox - CEO Anono</h2>
        </div>
      </div>
    </article>
  );
};

export default ClientFeedback;
