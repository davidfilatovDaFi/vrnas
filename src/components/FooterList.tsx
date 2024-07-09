interface IListItem {
  image?: string,
  text: string
}

interface IFooterListProps {
  title: string,
  list: IListItem[]
}

const FooterList = ({title, list}: IFooterListProps) => {
  return (
    <div>
      <h2 className="font-semibold mb-4">{title}</h2>
      <ul className="flex flex-col gap-4">
        {list.map((item, i) => (
          <li key={i}>
            <a className="flex gap-2 font-light" href="#">
              {item.image && <img src={item.image} alt="" />}
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList