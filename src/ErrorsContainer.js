import Error from './Error'

function ErrorsContainer(props){
    return (
        <ul>
            {props.errors.map(err => <Error error={err}/>)}
        </ul>
    )
}

export default ErrorsContainer