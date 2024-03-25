import useLoad from "../Hooks/useLoad"

const Err = () => 
{
  const loading = useLoad()

  return (
    <>
      {loading}
      <div className="error">
        THIS PAGE DOESN'T EXIST
      </div>
    </>
  )
}

export default Err