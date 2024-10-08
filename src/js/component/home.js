import React from "react";

//create your first component
const Home = ({ seconds }) => {
	const digits = [
	  Math.floor(seconds / 100000) % 10,
	  Math.floor(seconds / 10000) % 10,
	  Math.floor(seconds / 1000) % 10,
	  Math.floor(seconds / 100) % 10,
	  Math.floor(seconds / 10) % 10,
	  Math.floor(seconds % 10),
	];
  
	return (
	  <div className="container mt-5">
		<div className="row justify-content-center">
		  <div className="col-md-6">
			<div className="card border-0 shadow">
			  <div className="card-body bg-dark">
				<div className="d-flex justify-content-center">
				  <div className="badge bg-dark text-center mt-4">
					<i className="far fa-clock fa-5x text-bg-dark"></i>
				  </div>
				  {digits.map((digit, index) => (
					<div key={index} className="badge bg-dark mr-3">
					  <h1 className="display-1 text-bg-dark">{digit}</h1>
					</div>
				  ))}
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };


export default Home;