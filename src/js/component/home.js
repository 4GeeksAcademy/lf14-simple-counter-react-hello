import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter"

//create your first component
const Home = ({seconds}) => {
	return (
		<div className="text-center">
		<SimpleCounter/>
			
		</div>
	);
};

export default Home;
