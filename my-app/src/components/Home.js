import React from 'react';
import Swal from "sweetalert2";
import {connect} from "react-redux";
import {findReposById} from "../actions/index";
import Repository from "./Repository";

const Home = (props) => {

    const {repos,search} = props;

    const handleChange = (event) => {
        props.dispatch({
          type: "SET_SEARCH",
          filtered: event.target.value
        })
    }


    const findRepos = async (e, searchUser) => {
        e.preventDefault();
        
        console.log(searchUser);
        Swal.fire({
           title: 'Loading...'
        });
        Swal.showLoading();
        let success = await props.dispatch(findReposById(searchUser))
        Swal.close();
    }


    return (
        <div className="container text-white text-center">
           <h1 className="mt-5">Find Repository App</h1>

           <form className="mt-4" onSubmit={(e) => findRepos(e, search)}>
                <input value={search} onChange={handleChange}  type="text" className=" ml-5  col-4"></input>
                <button className="btn btn-dark ml-2" type="submit">Find User Repository</button>
           </form>

           <Repository repos={repos}></Repository>


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      repos: state.repos,
      search: state.search
    };
}  
  
export default connect(mapStateToProps)(Home);