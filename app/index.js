var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
)

/// *********************************************************************

// var USER_DATA = {
//   imargeUrl: "https://avatars1.githubusercontent.com/u/10079250",
//   name: "renan",
//   username: "renandeswarte"
// };

// var ProfilePic = React.createClass({
//   render: function() {
//     return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//   }
// });

// var Link = React.createClass({
//   changeUrl: function() {
//     window.location.replace(this.props.href)
//   },
//   render : function() {
//     return (
//       <span 
//         style={{color: 'blue', cursor:'pointer'}}
//         onClick={this.changeUrl}>
//         {this.props.children}
//       </span>

//     )
//   }
// })

// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <div>
//           <Link href={"https://www.github.com/" + this.props.username}>
//             {this.props.username}
//           </Link>
//       </div>
//     )
//   }
// })

// var ProfileName = React.createClass({
//   render: function() {
//     return (
//       <div>{this.props.name}</div>
//     )
//   }
// })

// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <ProfilePic imageUrl={this.props.user.imargeUrl} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} /> 
//       </div>
//     )
//   }
// })

// ReactDOM.render(
//   <Avatar  user={USER_DATA}/>,
//   document.getElementById('app')
// );

/// *********************************************************************

// function clickLog(name) {
//   return console.log('Name clicked : ', name)
// };

// var userData = {
//   firstname: "Renan",
//   lastname: "Deswarte",
//   day: "Thursday"
// };

// var HelloWorld = React.createClass({
//   render: function(){
//     console.log(this.props);

//     return (
//       <div>
//         Hello World
//         <div>
//           You are <User name={this.props.data.firstname} lastName={this.props.data.lastname}/>
//         </div>
//         <Date day={this.props.data.day} />
//       </div>
//     )
//   }
// });

// var User = React.createClass({
//   render: function(){
//     return (
//       <span>
//         <span onClick={clickLog.bind(clickLog, this.props.name)}>
//           {this.props.name}</span>&nbsp;
//         <span onClick={clickLog.bind(clickLog, this.props.lastName)}>
//           {this.props.lastName}
//         </span>
//       </span>  
//     )
//   }
// });

// var Date = (props) => <p>Today is {props.day}</p>


// var Date = function (props) {
//   return (
//     <p>Today is {props.day}</p>
//   )
// }

// ReactDOM.render(
//   <HelloWorld  data={userData}/>,
//   document.getElementById('app')
// );

