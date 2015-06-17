var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
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

    return (
      React.createElement("div", {style: containerStyle}, 

        React.createElement("h1", null, "material-ui"), 
        React.createElement("h2", null, "example project"), 

        React.createElement(RaisedButton, {label: "Super Secret Password", primary: true, onTouchTap: this._handleTouchTap})

      )
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }
  
});

module.exports = Main;