var Greeter = React.createClass({
    
    getDefaultProps: function(){
        return {
          name: 'React',
          message: 'This is the default message!'
        };
    },
    
    onButtonClick: function(e){
        e.preventDefault();
        var name = this.refs.name.value;
        alert(name);
    },
    
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
              <h1> Hello {name} called from React Component! </h1>
              <p>{message + "!!!"}</p>
              
              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set name</button>
              </form>
              
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