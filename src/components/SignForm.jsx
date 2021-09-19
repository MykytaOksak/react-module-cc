import React from "react"

export default class SignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = (event) => {
    // store the user in localStorage
    this.props.saveUser('user', JSON.stringify({email: this.state.email, password: this.state.password})); 
    // redirect to landing page
    window.location.href='/';
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  componentWillMount() {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if(localUser) {
      this.setState({ email: localUser.email, password: localUser.password })
    }
  }

  render() {
    if (localStorage.getItem("user")) { // if there's a user show the message below
      return (
        <div id="body-container" class="md:max-w-sm md:mx-auto grid grid-flow-rows gap-80 px-15 pb-80 pt-150 md:gap-70 md:px-20 md:pb-70 md:pt-120">
          <p class="text-white text-center">Welcome!</p>
        </div>
      )
    }
    else { // if there's no user, show the login form
      return (
        <div id="body-container" class="md:max-w-sm md:mx-auto grid grid-flow-rows gap-20 px-15 pb-80 pt-150 md:gap-30 md:px-20 md:pb-70 md:pt-120 text-center">
          <form onSubmit={this.handleSubmit}>
            <p class="text-white mb-10">Email:</p>
            <input
              id="email"
              type="email"
              value={this.state.email}
              placeholder="enter an email"
              class="mb-20 w-full transition px-20 py-10 duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
              focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
              onChange={this.handleEmailChange}
            />
            <div>
              <p class="text-white mb-10">Password:</p>
              <input
                id="password"
                type="password"
                value={this.state.password}
                placeholder="enter a password"
                class="mb-40 w-full transition px-20 py-10 duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
                onChange={this.handlePasswordChange}
              />
            </div>
            <button class="px-20 py-10 w-full bg-btn-primary rounded-full text-primary font-bold" type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
}