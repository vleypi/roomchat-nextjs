import Container from '../component/Container'
import Main from '../component/Main/Main'

const Index = ({popu}) => {
    console.log(popu)
    return (
        <Container>
            <Main />
        </Container>
    )
}

export default Index

export async function getServerSideProps(context) {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    console.log(res)
    return {
      props: {popu: res}, // will be passed to the page component as props
    }
  }