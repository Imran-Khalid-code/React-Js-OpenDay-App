import React from "react";
import OpenData from "../../../data/OpenDay.json";
import styles from "./Contents.module.scss";

const contents = () => {
	return (
		<div className="contents">
			{/* <h1>Schedule</h1> */}
			{OpenData &&
				OpenData.map((record) => {
					return (
						<div key={record.id}>
							{record.topics &&
								record.topics.map((data) => {
									return (
										<div className={styles.schedule} key={record.id}>
											{data.programs &&
												data.programs.map((course) => {
													return <div key={course.id}>{course.title}</div>;
												})}
										</div>
									);
								})}
						</div>
					);
				})}
		</div>
	);
};

export default contents;
