import React from "react";
import OpenData from "./data/OpenDay.json";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			{OpenData &&
				OpenData.map((open) => {
					return (
						<div className="App" key={open.id}>
							<strong>{open.description}</strong>
							<br></br>
							{open.start_time}
							<br></br>

							{open.topics &&
								open.topics.map((data) => {
									return (
										<div key={open.id}>
											<img src={data.cover_image} />
										</div>
									);
								})}

							{open.topics &&
								open.topics.map((data) => {
									return <div key={open.id}>{data.description}</div>;
								})}
						</div>
					);
				})}
		</div>
	);
};

export default App;
