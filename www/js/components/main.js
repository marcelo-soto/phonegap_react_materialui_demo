var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var DropDownMenu = mui.DropDownMenu;
var AppBar = mui.AppBar;
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

var Main = React.createClass({displayName: "Main",

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render: function() {

    var containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };


    var menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];



    return (
      React.createElement("div", {style: containerStyle}, 

        React.createElement("h1", null, "material-ui"), 
        React.createElement("h2", null, "example project"), 
React.createElement(AppBar, {
  title: "Title", 
  iconClassNameRight: "muidocs-icon-navigation-expand-more"}), 
        React.createElement(DropDownMenu, {menuItems: menuItems}), 
        React.createElement(RaisedButton, {label: "Super Secret Password", primary: true, onTouchTap: this._handleTouchTap})

      )
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }
  
});

module.exports = Main;