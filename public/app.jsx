var GreeterMessage = React.createClass({
    render: function(){
        return(
            <div>
              <h1>Some h1</h1>
              <p>Some paragraph</p>
            </div>
            );
    }
});

var GreeterForm = React.createClass({
    render: function(){
        return(
            
              <form>
                <input type="text" ref="name"/>
                <button>Set name</button>
              </form>
             
            );
    }
});

var Greeter = React.createClass({
    
    getDefaultProps: function(){
        return {
          name: 'React',
          message: 'This is the default message!'
        };
    },
    
    getInitialState: function(){
      return {
          name: this.props.name
      };  
    },
    
    onButtonClick: function(e){
        e.preventDefault();
        
        var nameRef = this.refs.name;
        var name = nameRef.value;
        
        nameRef.value = '';
        
        if(typeof name === 'string' & name.length > 0) {
          this.setState({
            name: name
        });    
        }
        
    },
    
    render: function() {
        var name = this.state.name;
        var message = this.props.message;
        return(
            <div>
              <h1> Hello {name} called from React Component! </h1>
              <p>{message + "!!!"}</p>
              
              <GreeterMessage />
              
              
              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set name</button>
              </form>
              
              <GreeterForm />
            </div> 
            );
    } 
});

let firstName = 'Kemal';
let myMessage = "I'm so happy to learn React.js so fast!";

ReactDOM.render(
             <Greeter name={firstName} message =  {myMessage} />,
             document.getElementById('app')
             );