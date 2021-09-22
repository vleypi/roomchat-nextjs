import { useAuth } from "../hooks/useAuth"

const Container = (props) => {
    const {loginAuth} = useAuth()
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}
export default Container
