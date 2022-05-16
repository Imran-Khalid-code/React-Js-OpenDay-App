import React from "react";
import OpenData from "../../../data/OpenDay.json";
import styles from "./Courses.module.scss";

const Courses = () => {
	return (
		<div>
			{/* <h1>Hello there</h1> */}
			{OpenData.map((openDetail) => {
				return (
					<div>
						{/* <h1 key={index}>{openDetail.description}</h1>
						<p>{openDetail.start_time}</p> */}
						<div className={styles.course}>
							{openDetail.topics.map((sub) => {
								return <div>{sub.name}</div>;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Courses;
