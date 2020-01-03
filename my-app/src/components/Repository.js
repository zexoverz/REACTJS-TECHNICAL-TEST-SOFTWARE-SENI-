import React from 'react'

const Repository = (props) => {
    return (
        <div id="repoList" className="mt-5">
            {
                props.repos.map(repo => 
                    <div className="jumbotron jumbotron-fluid text-dark" key={repo.id}>
                        <div className="container">
                            <h1 className="display-4">{repo.full_name}</h1>
                            <a href={repo.html_url}> Go to Repo</a>
                        </div>
                    </div>
                )
            }
        </div>
    );
}



export default Repository;