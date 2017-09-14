import React from 'react';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data :[
				{
					"id":1,
					"name":"kent",
					"age":20
				},
				{
	               "id":2,
	               "name":"Bar",
	               "age":"30"
	            },
					
	            {
	               "id":3,
	               "name":"Baz",
	               "age":"40"
            	}
			],
			"header": "Header from props...",
         	"content": "Content from props..."
		}
	}
   render() {
      return (
         <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
            <p>
	            <table>
	               <tbody>
	                  {this.state.data.map((person, i) => <TableRow key = {i} 
	                     data = {person} />)}
	               </tbody>
	            </table>
            </p>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>{this.props.headerProp}</h2>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
             <h2>{this.props.contentProp}</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
