import { API_CONFIG, type Post} from ""


interface PostProps {
    post:Post
}
const CardPost = () => {
  return (
    <div className='m-10 border-1 border-blue'>
        <div className=' m-4 border-1 rounded'>
            <h3 className=" m-3 text-2xl font-semibold text-red-900 ">userId</h3>
            <h3 className=" m-5 text-2xl font-semibold text-red-900 ">id</h3>
            <div className="m-10 ">
                <h3 className="text-2xl font-semibold text-red-900 ">title</h3>
                <h3 className="text-2xl font-semibold text-red-900 text-center ">body</h3>
            </div>
        </div>

        <div className=' m-4 border-1 rounded'>
            <h3 className=" m-3 text-2xl font-semibold text-red-900 ">userId</h3>
            <h3 className=" m-5 text-2xl font-semibold text-red-900 ">id</h3>
            <div className="m-10 ">
                <h3 className="text-2xl font-semibold text-red-900 ">title</h3>
                <h3 className="text-2xl font-semibold text-red-900 text-center ">body</h3>
            </div>
        </div>


        <div className=' m-4 border-1 rounded'>
            <h3 className=" m-3 text-2xl font-semibold text-red-900 ">userId</h3>
            <h3 className=" m-5 text-2xl font-semibold text-red-900 ">id</h3>
            <div className="m-10 ">
                <h3 className="text-2xl font-semibold text-red-900 ">title</h3>
                <h3 className="text-2xl font-semibold text-red-900 text-center ">body</h3>
            </div>
        </div>

    </div>
  )
}

export default CardPost