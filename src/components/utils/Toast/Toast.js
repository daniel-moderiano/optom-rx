import { StyledToast } from "./Toast.styled"

const Toast = ({ params }) => {
  return (
    <StyledToast className="toast" visible={params.visible} type={params.type}>
      {params.message}
    </StyledToast>
  )
}

export default Toast;
