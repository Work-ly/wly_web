import { IconType } from "react-icons"


interface Props {

    iconImg: IconType

}

function NavbarButton(props: Props) {
    return (
        <a href='/home'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md transition-all duration-100 ease-linear
              hover:scale-110'>
                <i className='text-white text-lg'>
                    {props.iconImg}
                </i>
            </div>
        </a>
    )


}
export default NavbarButton