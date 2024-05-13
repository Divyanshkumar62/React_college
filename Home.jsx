import {Component} from "react" ;

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log("WELCOME TO THE CONSTRUCTOR");
        this.state = {
            name: "earth",
            age : "35"
        }
    }
    //cannot write logic in constructor() method
    //use componentDidMount() to write the initial logic 
    componentDidMount(){
        this.setState({
            name: "Mars",
            age: 18
        })
        console.log("component did mount");
        // location = "Noida";
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("component did update")

    }
        handleClick = () => {
            let Count = this.state.clickCount+1;
            this.setState ({
                clickCount: Count
            })

        }
    

    render() {
        console.log("render");
        return (
            <>
            Welcome to the class component : {this.state.name}<br/>
            Age: {this.state.age}
            {/* Location: {location} */}
            <button onClick={handleClick}>{this.state.clickCount}</button>
            </>
        );
    }
}