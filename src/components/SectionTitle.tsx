interface ISectionTitleProps {
  title: string,
  text: string,
  className?: string
}

const SectionTitle = ({title, text, className}: ISectionTitleProps) => {
  return (
    <div className={className}>
      <h2 className="gradient-text">{title}</h2>
      <p className="text-[32px] lg:text-[48px] mt-3 font-semibold leading-[41px] lg:leading-[58px]">
        {text}
      </p>
    </div>
  )
}

export default SectionTitle