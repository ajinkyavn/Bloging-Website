import React from 'react';
import '../Style/Searchbox.css'

class Searchbox extends React.Component {
    render() {
      return(<div>
        <form action="" class="search-bar">
	    <input type="search" name="search" pattern=".*\S.*" required />
	    <button class="search-btn" type="submit">
		    <span>Search</span>
	    </button>
        </form>
      </div>);
    }
  }
export default Searchbox;
