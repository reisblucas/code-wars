const React = require("react");

class BeastForm extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.beastToRelease = {};
  }

  onSubmit(event) {
    event.preventDefault();
    unshackle(this.beastToRelease.value);
  }
  
  render() {
    return (
      <form onSubmit={ this.onSubmit } id="beastForm">
        <label>
          <input id="beastToRelease" type="text" defaultValue={ this.beastToRelease }/>
        </label>
        <button type="submit" value="Submit" id="submit"/>
      </form>
    );
  }
}

module.exports = {
  BeastForm,
};