import React from "react";
import OpenData from "../../data/OpenDay.json";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<>
			<div>
				<h2 className={styles.header}>Why Study At Cardiff University</h2>
				{OpenData &&
					OpenData.map((open) => {
						return (
							<div className={styles.content} key={open.id}>
								{/* <strong>{open.description}</strong> */}
								{/* <br></br>
								{open.start_time}
								<br></br> */}

								{/* {open.topics &&
									open.topics.map((data) => {
										return (
											<div key={open.id}>
												<img src={data.cover_image} />
											</div>
										);
									})} */}

								{open.topics &&
									open.topics
										.filter((data) => data.id === 38)
										.map((data) => <img src={data.cover_image} />)}

								{open.topics &&
									open.topics.map((data) => {
										return (
											<div className={styles.content} key={open.id}>
												{data.description}
											</div>
										);
									})}
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Home;
