import ReactDOM from "react-dom";

const Google = () => {
  return ReactDOM.createPortal((
    <>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
      async
      className="google-script"
      onLoad={() => console.log('loaded')}
    ></script>
    </>
  ), document.body)
}

export default Google
