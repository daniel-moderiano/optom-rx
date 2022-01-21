import { StyledPageHeader } from "./PageHeader.styled"

const PageHeader = ({ title, description }) => {
  return (
    <StyledPageHeader className="PageHeader" description={description}>
      {title && <h2 className="title">{title}</h2>}
      {description && <p className="description">{description}</p>}
    </StyledPageHeader>
  )
}

export default PageHeader
